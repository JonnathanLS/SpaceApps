using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Launcher.Models.Home
{
    public class FormContact
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Assunto { get; set; }
        public string Mensagem { get; set; }

        public FormContact() { }

    }
}