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
            ListaGrids.Add(new Grid() { Titulo = "Lançamentos Futuros", Resumo = "Relatório com informações sobre os lançamentos de foguetes nos próximos anos", UrlImagem = "https://cdnbr1.img.sputniknews.com/images/980/23/9802340.jpg", UrlPagina = "LancamentosFuturos" });
            ListaGrids.Add(new Grid() { Titulo = "Espaçoporto", Resumo = "Mapa com marcações dos espaçosportos espalhados pelo Mundo", UrlImagem = "https://vignette.wikia.nocookie.net/pt.starwars/images/9/9d/Pallista_Spaceport.png/revision/latest?cb=20151103160200", UrlPagina = "EspacoPorto" });
            ListaGrids.Add(new Grid() { Titulo = "Tipos de Foguetes", Resumo = "Configurações de foguetes e respectivas famílias.", UrlImagem = "https://static.vecteezy.com/system/resources/previews/000/153/887/non_2x/vector-rocket-launching-cape-canaveral.jpg", UrlPagina = "TiposFoguetes" });
            ListaGrids.Add(new Grid() { Titulo = "Sites de Lançamento", Resumo = "Relatório com links úteis para os sites que disponibilizam informações de lançamentos", UrlImagem = "https://cache.olhardigital.com.br/uploads/acervo_imagens/2018/04/20180423111710_660_420.jpg", UrlPagina = "SitesLancamentos" });
            //ListaGrids.Add(new Grid() { Titulo = "Acompanhe um Lançamento", UrlImagem = "https://imagens.canaltech.com.br/119183.200755-Falcon-9.jpg" });
            ListaGrids.Add(new Grid() { Titulo = "Missões por País", Resumo = "Gráfico em Pizza contendo a quantidade de missões por país", UrlImagem = "https://static.vix.com/pt/sites/default/files/styles/large/public/a/astronauta-planeta-visao-0117-1400x800.jpg?itok=4LOQVcaZ", UrlPagina = "MissoesPais" });
            ListaGrids.Add(new Grid() { Titulo = "Lançamentos por Agência", Resumo = "Relatório (Comparativo) da quantidade de lançamentos por Agência/Governo", UrlImagem = "https://www.avibras.com.br/site/images/programa_espacial.jpg", UrlPagina = "LancamentosAgencias" });
                       
        }
    }
}