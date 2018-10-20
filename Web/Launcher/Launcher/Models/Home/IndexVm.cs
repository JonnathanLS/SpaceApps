using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Launcher.Models.Home
{
    public class IndexVm
    {
        public List<Grid> ListaGrids { get; set; }

        public IndexVm()
        {
            ListaGrids = new List<Grid>();
            ListaGrids.Add(new Grid() { Text = "Espaçoporto", UrlImagem = "https://vignette.wikia.nocookie.net/pt.starwars/images/9/9d/Pallista_Spaceport.png/revision/latest?cb=20151103160200" });
            ListaGrids.Add(new Grid() { Text = "Foguetes", UrlImagem = "https://static.vecteezy.com/system/resources/previews/000/153/887/non_2x/vector-rocket-launching-cape-canaveral.jpg" });
            ListaGrids.Add(new Grid() { Text = "Sites de Lançamento", UrlImagem = "https://cache.olhardigital.com.br/uploads/acervo_imagens/2018/04/20180423111710_660_420.jpg" });
            ListaGrids.Add(new Grid() { Text = "Acompanhe um Lançamento", UrlImagem = "https://imagens.canaltech.com.br/119183.200755-Falcon-9.jpg" });
            ListaGrids.Add(new Grid() { Text = "Other Grid", UrlImagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShfnvCi0GLHw4DQtIBfjVbxVKs-e2ctuJAsvpYtg8a_DGR1sCo" });
            ListaGrids.Add(new Grid() { Text = "Entre em Contato", UrlImagem = "http://www.aptechsp.com.br/wp-content/uploads/2015/03/procura.jpg" });

        }
    }
}