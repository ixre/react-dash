

class LocalStorageWrapper {
    constructor() {
        this.storage = window.localStorage;
        this._now = () => Date.parse(new Date());
        this._err = (message, name) => {
            let err = new Error(message);
            err.name = name;
            return err;
        };
    }

    check() {

    }

    get(key) {
        let o = this.storage.getItem(key) || "";
        let cut = o.indexOf(';expire_time=');
        let exp = o.substring(cut);
        if (exp) {
            exp = exp.substring(13);
            if (exp < this._now()) {
                this.storage.removeItem(key);
                return null;
            }
        }
        let value = o.substring(0, cut < 0 ? o.length : cut);
        if (value.length > 0 && (value[0] == '{' || value[0] == '[')) {
            return JSON.parse(value);
        }
        return value;
    }

    save(key, value, seconds) {
        let s = value instanceof Object ? JSON.stringify(value) : value;
        if (seconds instanceof Number && seconds) {
            let expires = this._now() + seconds * 1000;
            s += ";expire_time=" + expires;
        }
        this.storage.setItem(key, s);
    }

    remove(key) {
        this.storage.removeItem(key);
    }

    load(key) {
        let o = this.storage.getItem(key);
        return Promise.resolve(o).then((d) => {
            if (d == undefined) return Promise.reject(this._err("no such data", "NotFoundError"));
        }).then((d) => {
            let cut = o.indexOf(';expire_time=');
            let exp = o.substring(cut);
            if (exp) {
                exp = exp.substring(13);
                if (exp < this._now()) {
                    this.storage.removeItem(name);
                    return Promise.reject(this._err("data expired", "ExpiredError"));
                }
            }
            let value = o.substring(0, cut < 0 ? o.length : cut);
            return Promise.resolve(value);
        }).then((value) => {
            if (value.length > 0 && (value[0] == '{' || value[0] == '[')) {
                return Promise.resolve(JSON.parse(value));
            }
            return Promise.resolve(value);
        });
    }


    // 丛缓存中加载,如果缓存不存在,则获取后更新缓存.
    /*
    Storage.fetchLoad("member:news",
        (ret)=>this.setState({news: ret}),
        (call)=>ApiCli.post("news.gets",{size:1},(ret)=>call(ret))
    );
     */
    fetchLoad(key, then, fetch, catchFunc) {
        this.load(key).then((ret) => {
            then(ret);
            fetch((ret) => {
                this.save(key, ret);
                then(ret);
            }, catchFunc);
        }).catch((err => {
            switch (err.name) {
                case 'NotFoundError':
                case 'ExpiredError':
                    fetch((ret) => {
                        this.save(key, ret);
                        then(ret);
                    }, catchFunc);
                    break;
                default:
                    catchFunc(err);
                    break;
            }
        }));
    }
}
export const LocalStorage = new LocalStorageWrapper();