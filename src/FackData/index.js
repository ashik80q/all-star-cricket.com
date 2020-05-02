import batting from './batting';
import bowling from './bowling';
import allRounder from './allrounder';


const fakeData = [...batting, ...bowling, ...allRounder];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;