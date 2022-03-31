function Footer({ className }) {

    let date = new Date().getFullYear();
    return (
        <div className={className}>
            &copy; {date} Devs_Unided - <span>BETA</span>
        </div>
    );
}

export default Footer;