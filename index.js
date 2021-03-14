const count7 = (n) => {
    let count = 0;
    for(let i=1;i<=n;i++) {
        if(String(i).includes(`7`)) {
            count++;
        }
    }
    return count;
}

const print = (n) => {
    console.log(`g(${n}) = ${count7(n)}`);
}

print(1);
print(7);
print(20);
print(70);
print(100);
print(1000);
