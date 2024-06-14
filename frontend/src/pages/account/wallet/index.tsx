export const Wallet = () => {

    return (<>
        <h1>Wallet <button><i className="fa-solid fa-add"> Add Wallet</i></button></h1>
        <section className="wallet">
            <div className="wallet-info">
                <div className="wallet-info-left">
                    <div className="wallet-info-left-name">No wallet found!</div>
                    <div className="wallet-info-left-balance"></div>
                </div>
            </div>
        </section>

        <div
            className="paxful-login-button"
            data-button-width="300"
            data-button-size="md"
            data-button-text="sign-up-with-paxful"
            data-button-shape="rectangular"
            data-button-language="en"
            data-button-style="primary"
        />

    </>
    )
}