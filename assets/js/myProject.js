let blogs = []
let checkedValue = [];

let postProject = (event) => {
    event.preventDefault()
    let titleProject = document.getElementById('titleProject').value
    let startProject = document.getElementById('startDateProject').value
    let endProject = document.getElementById('endDateProject').value
    let descriptionProject = document.getElementById('descriptionProject').value
    let imagesProject = document.getElementById('inputImageProject').files[0]

    imagesProject = URL.createObjectURL(imagesProject)

    let technologyProject = document.getElementsByName('checkboxProject');

    checkedValue = [];
    for (var i = 0; i < technologyProject.length; i++) {
        if (technologyProject[i].checked == true) {
            checkedValue.push(technologyProject[i].value)
        }
    }

    let blog = {
        titleProject,
        // startProject,
        // endProject,
        descriptionProject,
        checkedValue,
        imagesProject,
    }
    blogs.push(blog)
    renderProject()
}


let renderProject = () => {
    let renderCardProject = document.getElementById('cardProjectRender')
    let data = checkedValue.length

    renderCardProject.innerHTML = ""
    for (i = 0; i < blogs.length; i++) {
        renderCardProject.innerHTML += `<div class="cardProjectRender">
        <div class="projectImgWrapper">
            <img src="${blogs[i].imagesProject}" alt="">
        </div>
        <div class="projectContentWrapper">
            <a href="detail-project.html" class="titleCardProject">${blogs[i].titleProject}</a>
            <p class="distanceCardProject">Duration : 3 Month</p>
            <p class="descCardProject">${blogs[i].descriptionProject}</p>
            <div class="iconCardProject">
                ${(function icon() {
                let string = ""
                for (let j = 0; j < data; j++) {
                    string += `<div class="itemIconProject">
                            <i class="fa-brands fa-${blogs[i].checkedValue[j]}"></i>
                        </div>`
                }
                return string
            })()}
            </div>
            <div class="cardProjectAction">
                <a href="#" class="cardEditAction">EDIT</a>
                <a href="#" class="cardDeleteAction">DELETE</a>
            </div>
        </div>
    </div>`
    }
}
