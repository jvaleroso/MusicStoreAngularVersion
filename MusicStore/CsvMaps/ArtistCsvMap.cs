using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CsvHelper.Configuration;

namespace MusicStore.CsvMaps
{
    public class ArtistCsvMap: CsvClassMap<Artist>
    {
        public override void CreateMap()
        {
            Map(m => m.Name);
        }
    }
}
