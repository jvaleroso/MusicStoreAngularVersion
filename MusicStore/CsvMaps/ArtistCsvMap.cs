using System;
using CsvHelper.Configuration;

namespace MusicStore.CsvMaps
{
    public class ArtistCsvMap: CsvClassMap<Artist>
    {
        [Obsolete("This method is deprecated and will be removed in the next major release. Specify your mappings in the constructor instead.", false)]
        public override void CreateMap()
        {
            Map(m => m.Name);

        }
    }
}
