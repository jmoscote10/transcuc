export const Funcionamiento = ()=>{
    return(
        <>
        <div>
            <h2>{String.fromCodePoint(0x1F6E0)} {/* 🛠️ */} Cómo Funciona {String.fromCodePoint(0x2699)} {/* ⚙️ */}</h2>
            <p>Nuestro servicio es sencillo de usar:</p>
            <ol>
                <li><strong>Regístrate:</strong> Crea una cuenta en nuestra plataforma.</li>
                <li><strong>Solicita un viaje:</strong> Ingresa tu destino y cantidad, selecciona un conductor disponible.</li>
                <li><strong>Disfruta del viaje:</strong> Nuestros conductores te llevarán a tu destino de manera segura y cómoda.</li>
                <li><strong>Califica:</strong> Al finalizar el viaje, califica la experiencia.</li>
            </ol>
        </div>
        </>
    )
}