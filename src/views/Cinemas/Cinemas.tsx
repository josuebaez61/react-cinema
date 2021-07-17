import React from 'react'
import { Card } from 'primereact/card'

const Cinemas = () => {
    return (
        <div className="container p-pt-2 p-pb-2 animate__animated animate__fadeIn">
            <Card className="p-card-black">
                <h1>Cines</h1>
                <div className="p-grid">
                    <div className="p-col-12 p-md-6">
                        <iframe title="iframe_1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52512.71376006144!2d-58.56923124330868!3d-34.653576308594786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7d733269ca5%3A0x382f83fa2ef5001a!2sCinema%20Devoto!5e0!3m2!1ses!2sar!4v1623953000572!5m2!1ses!2sar" height="500" style={{ "border": "0", "width": "100%" }} loading="lazy"></iframe>
                        <a href="https://g.page/Cinema-Devoto-ok?share">
                            Cinema Devoto BVC, Quevedo 3365, C1417 CABA</a>
                    </div>
                    <div className="p-col-12 p-md-6">
                        <iframe title="iframe_2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d287516.71305264067!2d12.126132710937503!3d55.737231312174586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaefb4407a4078bea!2sGrand%20Teatret!5e0!3m2!1ses!2sar!4v1623953074852!5m2!1ses!2sar" height="500" style={{ "border": "0", "width": "100%" }} loading="lazy"></iframe>
                    </div>
                    <div className="p-col-12 p-md-6">
                        <iframe title="iframe_3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62492.729966749226!2d-58.46302902531757!3d-34.59481594707565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22f851827c26991e!2sCinemark%20Palermo!5e0!3m2!1ses!2sar!4v1623953155498!5m2!1ses!2sar" height="500" style={{ "border": "0", "width": "100%" }} loading="lazy"></iframe>
                    </div>
                    <div className="p-col-12 p-md-6">
                        <iframe title="iframe_4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62492.729966749226!2d-58.46302902531757!3d-34.59481594707565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefa34d7892133e88!2sCinemark%20Hoyts!5e0!3m2!1ses!2sar!4v1623953181150!5m2!1ses!2sar" height="500" style={{ "border": "0", "width": "100%" }} loading="lazy"></iframe>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Cinemas
