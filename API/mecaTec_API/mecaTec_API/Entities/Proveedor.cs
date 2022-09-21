using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mecaTec_API.Entities
{
    public class Proveedor
    {
        public int cedJuridica { get; set; }
        public string nombre { get; set; }
        public string provincia { get; set; }
        public string canton { get; set; }
        public string distrito { get; set; }
        public string correo { get; set; }
        public string contacto { get; set; }
    }
}
