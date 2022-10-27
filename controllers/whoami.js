
exports.whoami = (req, res) => {
    const ipv4 = req.ip.split(":")
    // console.log(ipv4[3]);
    //console.log(req.headers);
    // console.log(req.headers["accept-language"]);
    // console.log(req.headers["user-agent"]);
    const language = req.headers["accept-language"]
    const software = req.headers["user-agent"]
    res.send({"ipaddress": ipv4[3], "language": language, "software": software});
    
}