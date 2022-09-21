using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mecaTec_API.Entities
{
    public class Trabajador
    {

        public int cedula { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string sNombre { get; set; }
        public string rol { get; set; }
        public DateTime fechaNac { get; set; }
        public DateTime fechaIng { get; set; }

        public string usuario { get; set; }
        public string contraseña { get; set; }

    }
}
