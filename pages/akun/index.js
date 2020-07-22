import React, { Component } from 'react';
import Menu from '../../components/menu';
import Layout from '../../layout/layouts';
import Link from 'next/link';

class Akun extends Component{
  render(){
    return(
      <div>
        <Layout>
          <Menu/>
          <hr/>
          <h1>Sebelum Membeli Silahkan Login atau Buat Akun Terlebih Dahulu</h1>
          <p>silahkan pilih login atau buat akun</p>
          <ul>
          <li><Link href="/akun/daftar"><a>Daftar</a></Link></li>
          <li><Link href="/akun/login"><a>Login</a></Link></li>
          </ul>
        </Layout>
      </div>
    );
  }
}


export default Akun;