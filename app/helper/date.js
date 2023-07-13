import react from "react";
import {LocaleConfig} from 'react-native-calendars';
export const dateSettings = () =>{
    LocaleConfig.locales['tr'] = {
        monthNames: [
          'Ocak',
          'Şubat',
          'Mart',
          'Nisan',
          'Mayıs',
          'Haziran',
          'Temmuz',
          'Ağustos',
          'Eylül',
          'Ekim',
          'Kasım',
          'Aralık'
        ],
        monthNamesShort: ['Oca.', 'Şub.', 'Mar.', 'Nis', 'May', 'Haz', 'Tem.', 'Agu.', 'Eyl.', 'Ekm.', 'Kas.', 'Ara.'],
        dayNames: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
        dayNamesShort: ['Prts.', 'Sal.', 'Çar.', 'Per.', 'Cum.', 'Cmrt.', 'Pzr.'],
        today: "Bugün"
      };
      LocaleConfig.defaultLocale = 'tr';
}

export const dateRange = (oneDate,secondDate) =>{
    const date = {
        [oneDate.dateString]:{startingDay: true, color: '#0069B4', textColor: 'white'},
    }
    const range = parseInt(secondDate.day,10) - parseInt(oneDate.day,10);
    const oneDay = parseInt(oneDate.day,10) 
    let day;
    for(var i = 1; i<range;i++){
        day = oneDay + i;
        if(day<10){
            day = '0' + day;
        }
        else{
            day = day.toString();
        }
        date[oneDate.year + '-' + oneDate.month + '-' + day ] = {color:'#0069B4', textColor: 'white'}
    }
    date[secondDate.dateString] = {endingDay: true, color: '#0069B4', textColor: 'white'}
    return date;
}

export const oneClickDate = (oneDate) => {
    return{
        [oneDate.dateString]:{disabled:true,color:'#0069B4', textColor: 'white'}
    }
}