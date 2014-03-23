using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using CsvHelper.Configuration;

namespace MusicStore.CsvMaps
{
   public class GenreCsvMap: CsvClassMap<Genre>
    {
       public override void CreateMap()
       {
           Map(m => m.Name);
           Map(m => m.Description);
       }
    }
}
