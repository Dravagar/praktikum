import Menu from '../../components/menu';
import Layout from '../../layout/layouts';

export default function daftar(){
  return(
    <div>
      <Layout>
        <Menu/>
        <hr/>
        <h1>Silahkan Isi Form Dibawah ini</h1>
        <p>Nama :</p>
        <p>Email :</p>
        <p>Password :</p>
      </Layout>
    </div>
  );
}