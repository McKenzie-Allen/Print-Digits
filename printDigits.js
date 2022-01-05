const printDigits = num => {
    while (num) {
        let revDidgit = num % 10
        console.log(revDidgit)
        num = (num - revDidgit) / 10
    }
}

printDigits(789)
printDigits(4789)
printDigits(123456789)
printDigits(852)