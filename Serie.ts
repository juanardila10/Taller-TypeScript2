export class Serie{


    constructor(public id: number, public name: string,public channel: string, public seasons: number, public sinopsis: string, public url: string, public img: string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.sinopsis = sinopsis;
        this.url = url;
        this.img = img;
    }
}