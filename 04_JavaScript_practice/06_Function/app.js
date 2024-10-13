function singSong(user) {
    console.log(`${user}: Do Re Mi`);
    console.log(`${user}: Do Re Mi`);
    console.log(`${user}: Do Re Mi`);
}

// 여러 값을 넣는 것은 파이썬의 def와 다르지 않다

function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    return x + y;
}