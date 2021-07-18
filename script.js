const colorArray = [
    '#748F9B','#70AD60','#846A17','#BA19DB','#340BEE','#70F17D','#68D6DD','#DBD21E','#054B5E','#91D09A','#4592D6','#5FDC6F','#812478','#487804','#A1B88B','#E0356A','#041837','#8759B3','#6EC1F6','#EBA231','#6C22CB','#664C42','#34C159','#6F6980','#95974A','#81DC24','#8EDD12','#5F0F9C','#4F88C2','#E9EA81','#2477A5','#1C29D4','#802BA6','#533585','#A77A01','#28A8CD','#C1121B','#AE0D68','#C6A5E9','#79FE49','#D1521B','#9CEEA5','#E38BEF','#07ACAF','#DA18A5','#ACB5F1','#18D893','#2D584F','#6E8092','#383C2E','#B18DCF','#89339E','#6CEE16','#E81DE2','#7FA6B5','#9B4BFC','#C888FF','#AE942D','#7E42F3','#83CA1A','#9E0241','#5E15A0','#62E837','#147D88','#8028A5','#F38854','#2F686A','#2FA06A','#B1933C', '#763AEA', '#E5E640','#7CECB3','#4A733B','#E22A36','#3BA0D9','#CB6A06','#8194C1','#727FA3','#E84A9D','#1E87C2','#B8F9C9','#AC6EE7','#2950AD','#D76F01','#2EB8A8','#9FD67A','#4D3D4A','#2206F0','#845DFE','#5DE2D2','#76B293','#79A299','#F55937','#F8CF09','#A82078', '#000000', '#FFFFFF'
]


const cta = document.getElementById('cta')
const colour1 = document.getElementById('colour_element_1')
const colour2 = document.getElementById('colour_element_2')

function generateNumber1(){
    return Math.floor(Math.random() * colorArray.length)
}

function generateNumber2(){
    return Math.floor(Math.random() * colorArray.length)
}


cta.addEventListener("click", function(){
    let code1 = colorArray[generateNumber1()]
    let code2 = colorArray[generateNumber2()]
    document.body.style.background = `linear-gradient(to right, ${code1}, ${code2})`
    colour1.innerText = code1
    colour2.innerText = code2
})

