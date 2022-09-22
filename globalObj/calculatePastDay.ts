const calculatePastDay = (comparedDay: string) => {
    // console.log(new Date(comparedDay).setHours(0, 0, 0, 0))
    // console.log(new Date().setHours(0, 0, 0, 0))
    const DayToMiliSec = 1000 * 60 * 60 * 24
    return (new Date().setHours(0, 0, 0, 0) - new Date(comparedDay).setHours(0, 0, 0, 0)) / DayToMiliSec
}

export default calculatePastDay;