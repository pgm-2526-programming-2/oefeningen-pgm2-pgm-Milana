
let amountOfMessages = 0

function showMessage(){
    console.log('hoi!')

    amountOfMessages = amountOfMessages + 1
    if (amountOfMessages ===10) return
    showMessage()
}

showMessage()

const menu = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Explore",
        path: '/explore',
        subpages: [
            {
                name: "Awards",
                path: '/awards',
                subpages: [
                    {
                        name: "Nominees",
                        path: '/nominees'
                    },
                    {
                        name: "Sites of the day",
                        path: '/sotd'
                    }
                ]
            },
            {
                name: "Blog",
                path: 'blog'
            }
        ]
    }
]

function showMenuNoRecursion(list){
    for(const items of list) {
        console.log('Name: ', items.name, 'Path: ', items.path)

        if(items.subpages) {
            for (const subitem of items.subpages){
                console.log('Name: ', subitem.name, 'Path: ', subitem.path)

                if(subitem.subpages) {
                    for(const subsubitem of subitem.subpages) {
                        console.log('Name: ', subsubitem.name, 'Path: ', subsubitem.path)
                    }
                }
            }
        }
    }

}

showMenuNoRecursion(menu)

function showMenuRecursion(list) {
    for (const items of list) {

        console.log('Name: ', items.name, 'Path: ', items.path);

        if (items.subpages) {
            showMenuRecursion(items.subpages);
        }
    }
}

showMenuRecursion(menu);
