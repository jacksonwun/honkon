interface CarouselObj {
    title: string
    description: string
    url: string
    alt: string
  }

export const images: CarouselObj[] = [
        {title:'This is my title1', description:'This is my description', url:'/images/slide-4.jpg', alt:'Your alt text'}, 
        {title:'This is my title2', description:'This is my description', url:'/images/slide-4.jpg', alt:'Your alt text'}, 
        {title:'This is my title3', description:'This is my description', url:'/images/slide-4.jpg', alt:'Your alt text'}, 
        {title:'This is my title4', description:'This is my description', url:'/images/slide-4.jpg', alt:'Your alt text'}]

const imageByIndex = (index: number): CarouselObj => images[index % images.length]

export default imageByIndex
