import Menu from '../../components/menu';
import Layout from '../../layout/layouts';

export default function Beranda(){
  return(
    <div>
      <Layout>
        <h1>ZONA KAMERA</h1>
        <p>Toko Kamera Terlengkap Di Banyuwangi</p>
        <hr/>
        <Menu/>
        <hr/>
      <center><img src="/kamera.jpg" width="800px"></img></center>
      <hr />
      <section>
        <center><h2><u>Produk Terlaris</u></h2></center>
        <center>
        <div class="list-produk">
        <img src="/tes.png" width="150px"></img>
        <h4> Sony A6000 </h4>
        <h5> Rp 10.000.000,- </h5>
        
        <a class="tombol tombol-detail" href="#">Detail</a>
        <a class="tombol tombol-beli" href="#">Beli</a>
        </div>

        <div>
        <img src="/tes1.png" width="100px"></img>
        <h4> Xiaomi Yi 5 </h4>
        <h5> Rp 4.000.000,- </h5>
        
        <a class="tombol tombol-detail" href="#">Detail</a> 
        <a class="tombol tombol-beli" href="#">Beli</a>
        </div>
        </center>
      </section>
      <hr />
    </Layout>
    </div>
  );
}