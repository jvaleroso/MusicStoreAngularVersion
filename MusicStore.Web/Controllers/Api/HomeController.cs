using System.Web.Http;
using System.Web.Mvc;

namespace MusicStore.Web.Controllers.Api
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
