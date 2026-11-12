
function Contact() {

  return (
    <section>
      <div id="contactushero" className="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">      
      </div>
      <div className="uk-child-width-1-1@s" uk-grid>
        <div className="contactuscontainer">
          <div id="contactus" className="uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
            <h3 id="contacttitle"className="uk-text-lead">CONTACT US</h3>
            <br></br>
            <div className="goldcontainer">
              <div className="uk-background-cover uk-height-full uk-panel uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-text-center">
                <div id="privateevent" className="uk-column-1-1 uk-flex-nowrap">
                  <div className="left">
                    <form>
                      <fieldset className="uk-fieldset">
                        <div className="uk-margin">
                          <input className="uk-input" type="text" placeholder="NAME"/>
                          <input className="uk-input" type="text" placeholder="E-MAIL"/>
                          <input className="uk-input" type="text" placeholder="PHONE"/>
                          <textarea className="uk-textarea" rows="4" placeholder="MESSAGE"></textarea>
                        </div>
                        <div className="uk-margin">
                        </div>
                      </fieldset>
                      <button id='submit' className="uk-button">SUBMIT</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>     
      </div>
    </section>
  )
}
export default Contact



