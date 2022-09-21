using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mecaTec_API.Controllers
{
    public class ParteRepuestoInsumoController : Controller
    {
        // GET: ParteRepuestoInsumoController
        public ActionResult Index()
        {
            return View();
        }

        // GET: ParteRepuestoInsumoController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ParteRepuestoInsumoController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ParteRepuestoInsumoController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ParteRepuestoInsumoController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ParteRepuestoInsumoController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ParteRepuestoInsumoController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ParteRepuestoInsumoController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
