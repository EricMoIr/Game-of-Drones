module.exports = (res, code, msg, err) => {
    res.status(409);
    res.send(msg);
    console.error(msg);
    console.error(err);
}