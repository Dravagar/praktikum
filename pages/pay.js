
import Link from 'next/link';
import Nav from '../../components/Finishing';



    class Pembayaran extends React.Component{
    render(){
        return(
                <div class="bayar">
                <center>
                <div class="form">
                    <div class="input_text">
                        <span>Nama</span><br/>
                        <input type="text"/>
                    </div>
                    <div class="input_text">
                        <span>E-mail</span><br/>
                        <input type="text"/>
                    </div>
                    <div class="select">
                        <span>Jenis Kamera</span><br/>
                        <select class="jenis_kamera">
                            <option value="">Kamera Dslr</option>
                            <option value="">Action Cam</option>
                        </select>
                    </div>
                    <div class="input_text">
                        <span>Nama Kamera</span><br/>
                        <input type="text"/>
                    </div>
                    <div class="input_text">
                        <span>Unit Pembelian</span><br/>
                        <input type="number"/>
                    </div>
                    <div class="select">
                        <span>Pembayaran</span><br/>
                        <select class="type_bayar">
                            <option value="">BCA</option>
                            <option value="">BRI</option>
                            <option value="">BANK JATIM</option>
                        </select>
                    </div>
                    <div class="input_button">
                    <div class="cancel">
                       <Link href="/index"><a><button class="b_1">Cancel</button></a></Link></div>
                    </div>
                </div></center>
                </div>  
            )
        }
        }


        export default Pembayaran;