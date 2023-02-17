
const Deadlineshow = () => {

   
    const today = new Date()
    const tomorrow = new Date (today)

    var jam = tomorrow.getHours()
    var menit = tomorrow.getMinutes ()
    
    tomorrow.setDate(tomorrow.getDate() + 1)
   
    const tampilkanTanggal = new Intl.DateTimeFormat('id-ID', { dateStyle: 'full'}).format(tomorrow);
    var tampilkanWaktu = "Jam " + jam + ":" + menit

    console.log (today)
    


    return (
        <div>
           <p>{tampilkanTanggal} {tampilkanWaktu}</p>

        </div>
    )
}

export default Deadlineshow