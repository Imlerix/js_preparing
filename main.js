function checkBrackets(stroke) {
    let array = [...stroke]
    let isCheckable = true;
    let position = null;
    let position1 = null;
    let position2 = null;

    while(isCheckable) {
        position = stroke.indexOf('()')
        position1 = stroke.indexOf('[]')
        position2 = stroke.indexOf('{}')

        function findAndCut(position) {
            array.splice(position, 2)
            stroke = array.join("")
            isCheckable = true
        }

        if (~position) {
            findAndCut(position)
            continue;
        } else {
            isCheckable = false
        }

        if (~position1) {
            findAndCut(position1)
            continue;
        } else {
            isCheckable = false
        }

        if (~position2) {
            findAndCut(position2)
        } else {
            isCheckable = false
        }
    }
    console.log(array.join(""))
    return array.length === 0
}

console.log(checkBrackets('[{(([]))}([])]'))
