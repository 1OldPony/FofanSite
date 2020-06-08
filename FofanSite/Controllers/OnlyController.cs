using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FofanSite.Models;

namespace FofanSite.Controllers
{
    public class OnlyController: Controller
    {
        public IActionResult Site()
        {
            return View();
        }

        public IActionResult SendMail() {
            return RedirectToAction("Site");
        }
    }
}