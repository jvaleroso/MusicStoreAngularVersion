using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using CsvHelper;
using MusicStore.CsvMaps;
using MusicStore.Data;

namespace MusicStore.Services
{
    public class ArtistService : IArtistService
    {
        private readonly IArtistDao _artistDao;
        private readonly IArtistFactory _artistFactory;

        public ArtistService(IArtistDao artistDao, IArtistFactory artistFactory)
        {
            _artistDao = artistDao;
            _artistFactory = artistFactory;
        }

        public Artist Save(Artist artist)
        {
            return _artistDao.Save(artist);
        }

        public void Delete(Artist artist)
        {
            _artistDao.Delete(artist);
        }

        public Artist GetById(long id)
        {
            return _artistDao.GetById(id);
        }

        public IList<Artist> GetList()
        {
            return _artistDao.GetList();
        }


        public bool UpdloadArtists(Stream memoryStream)
        {
            bool result = true;

            try
            {
                var existingArtists = this.GetList();

                using (var txtReader = new StreamReader(memoryStream))
                {

                    using (var reader = new CsvReader(txtReader))
                    {
                        reader.Configuration.HasHeaderRecord = true;
                        reader.Configuration.RegisterClassMap<ArtistCsvMap>();

                        var records = reader.GetRecords<Artist>().ToArray();

                        foreach (var record in records)
                        {
                            var exist = existingArtists.Any(a => string.Compare(a.Name, record.Name, StringComparison.OrdinalIgnoreCase) == 0);
                            if (exist)
                                continue;

                            var artist = _artistFactory.CreateArtist(record.Name);

                            this.Save(artist);
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


        public void DownloadArtists(Stream memortStream)
        {
            var records = this.GetList();
            using (var txtWriter = new StreamWriter(memortStream))
            {
                using (var csvWriter = new CsvWriter(txtWriter))
                {
                    csvWriter.Configuration.HasHeaderRecord = true;
                    csvWriter.Configuration.RegisterClassMap<ArtistCsvMap>();
                    csvWriter.WriteHeader(typeof(Artist));

                    foreach (var record in records)
                    {
                        csvWriter.WriteRecord(record);
                    }
                }
            }
        }
    }
}
