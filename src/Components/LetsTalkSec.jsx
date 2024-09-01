

function LetsTalkSec() {
  return (
    <section className="grid place-content-center mt-14">
<div className="form-container">
    <form className="form" action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="9acd8131-bcdf-4312-8fd6-bd99311605eb"></input>
        <span className="heading">Let's Talk</span>
        <input placeholder="Name" name="name" type="text" className="input" />
        <input placeholder="Email" name="email" id="mail" type="email" className="input" />
        <textarea placeholder="Say Hello" rows="10" cols="30" id="message" name="message" className="textarea"></textarea>
        <div className="button-container">
        <button className="send-button" type="submit">Send</button>
    </div>
</form>
</div>
    </section>
  )
}

export default LetsTalkSec