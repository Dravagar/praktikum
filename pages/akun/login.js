import Menu from '../../components/menu';
import Layout from '../../layout/layouts';

export default function Login(){
  return(
    <div>
      <Layout>
        <Menu/>
        <hr/>
        <h1>Silahkan Login</h1>
        <p>Email:</p>
        <p>Password :</p>
      </Layout>
    </div>
  );
}