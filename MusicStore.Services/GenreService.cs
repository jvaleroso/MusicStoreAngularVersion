using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CsvHelper;
using MusicStore.CsvMaps;
using MusicStore.Data;
using MusicStore.Factory;

namespace MusicStore.Services
{
    public class GenreService: IGenreService
    {
        private readonly IGenreDao _genreDao;
        private readonly IGenreFactory _genreFactory;

        public GenreService(IGenreDao genreDao, IGenreFactory genreFactory)
        {
            _genreDao = genreDao;
            _genreFactory = genreFactory;
        }

        public Genre Save(Genre genre)
        {
            return _genreDao.Save(genre);
        }

        public void Delete(Genre genre)
        {
           _genreDao.Delete(genre);
        }

        public Genre GetById(long id)
        {
           return _genreDao.GetById(id);
        }

        public IList<Genre> GetList()
        {
            return _genreDao.GetList();
        }

        public bool ImportGenreConfig(Stream memoryStream)
        {
            bool result = true;

            try
            {
                var existingArtists = GetList();

                using (var txtReader = new StreamReader(memoryStream))
                {

                    using (var reader = new CsvReader(txtReader))
                    {
                        reader.Configuration.HasHeaderRecord = true;
                        reader.Configuration.RegisterClassMap<GenreCsvMap>();

                        var records = reader.GetRecords<Genre>().ToArray();

                        foreach (var record in records)
                        {
                            var exist = existingArtists.Any(a => string.Compare(a.Name, record.Name, StringComparison.OrdinalIgnoreCase) == 0);
                            if (exist)
                                continue;

                            var artist = _genreFactory.CreateGenre(record.Name, record.Description);
                            Save(artist);
                        }
                    }
                }
            }
            catch (Exception)
            {
                result = false;
            }
            return result;
        }


        public void ExportGenreConfig(Stream memortStream)
        {
            var records = GetList();
            using (var txtWriter = new StreamWriter(memortStream))
            {
                using (var csvWriter = new CsvWriter(txtWriter))
                {
                    csvWriter.Configuration.HasHeaderRecord = true;
                    csvWriter.Configuration.RegisterClassMap<GenreCsvMap>();
                    csvWriter.WriteHeader(typeof(Genre));

                    foreach (var record in records)
                    {
                        csvWriter.WriteRecord(record);
                    }
                }
            }
        }
    }
}
