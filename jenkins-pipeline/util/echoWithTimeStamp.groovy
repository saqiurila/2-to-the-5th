// cerner_2^5_2018

def call(String message) {
    def timeStamp = new Date().format("yyyy-MM-dd HH:mm:ss.SSS", TimeZone.getTimeZone('CST6CDT'))

    echo "["+timeStamp+"] " + message;
}