export const Contactos = ()=>{
    return(
        <>
        <div>
            <h2>Contacto y Soporte</h2>
            <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos:</p>
            <ul>
                <li>{String.fromCodePoint(0x2709)}  {/* ✉️ */}<strong>Email:</strong> soporte@transcucporteservice.com</li>
                <li>{String.fromCodePoint(0x1F4DE)} {/* 📞 */}<strong>Teléfono:</strong> +57 3245457084</li>
                <li>{String.fromCodePoint(0x1F310)} {/* 🌐 */}<strong>Chat en línea:</strong> Disponible en nuestra aplicación.</li>
            </ul>
        </div>
        </>
    )
}