class TileStyle1 {

    #OuterHTML
    #title
    set #size(val) {
        this.#_size[0].className = val;
    }
    #_size;
    
    set #color(val) {
        this.#_color.css('background-color', val);
    }
    #_color;

    #icon
    #subtitle
    #unit
    #chart

    constructor(
        titleInputSelector,
        sizeInputSelector,
        colorInputSelector,
        iconInputSelector,
        subtitleInputSelector,
        unitInputSelector,
        chartInputSelector,
        dataset
    ) {
        
        const instance = this;

        $(titleInputSelector).change(function () {
            instance.#title = this.value;
        });
        $(sizeInputSelector).change(function () {
            instance.#size = this.value;
        });
        $(colorInputSelector).on('changeColor',function (e) {
            instance.#color = e.value;
        });
        $(iconInputSelector).change(function () {
            instance.#icon = this.value;
        });
        $(subtitleInputSelector).change(function () {
            instance.#subtitle = this.value;
        });
        $(unitInputSelector).change(function () {
            instance.#unit = this.value;
        });
        $(chartInputSelector).change(function () {
            instance.#chart = this.value;
        });
        dataset.change(function () {
            instance.#dataset = this.dataset;
        })
        
        this.#Bulid(
            $(sizeInputSelector).val(),
            $(colorInputSelector).val()
        );
    }

    #Bulid(size, color) {
        const row = $('<div class="row"></div>');

        this.#_size = $('<div class="' + size + '"></div>');
        row.append(this.#_size);

        this.#_color = $('<div class="card bg-primary" style="backgorund-color:' + color + '"></div>');
        this.#_size.append(this.#_color);
        
        let elem = $('<div class="card-body"></div>');
        this.#_size.append(elem);

        let elem2 = $('<div class="d-flex"></div>');
        elem.append(elem2);

        elem = $('<div class="me-3 align-self-center"></div>');

        cardBody.append('')

    }

    get HTML() {
        return OuterHTML.outerHTML;
    }
}

class Chart {
    constructor(type) {}
}
