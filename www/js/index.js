// export default (props, { $f7, $, $on }) => {
//     let calendarDefault;
//     let calendarDateFormat;
//     let calendarDateTime;
//     let calendarMultiple;
//     let calendarRange;
//     let calendarModal;
//     let calendarInline;
//     $on('pageInit', () => {
//         var monthNames = [
//             'January',
//             'February',
//             'March',
//             'April',
//             'May',
//             'June',
//             'July',
//             'August',
//             'September',
//             'October',
//             'November',
//             'December',
//         ];
//         calendarInline = $f7.calendar.create({
//             containerEl: '#demo-calendar-inline-container',
//             value: [new Date()],
//             renderToolbar: function () {
//                 return (
//                     '<div class="toolbar calendar-custom-toolbar no-shadow">' +
//                     '<div class="toolbar-inner">' +
//                     '<div class="left">' +
//                     '<a  class="link icon-only"><i class="icon icon-back"></i></a>' +
//                     '</div>' +
//                     '<div class="center"></div>' +
//                     '<div class="right">' +
//                     '<a  class="link icon-only"><i class="icon icon-forward"></i></a>' +
//                     '</div>' +
//                     '</div>' +
//                     '</div>'
//                 );
//             },
//             on: {
//                 init: function (c) {
//                     $('.calendar-custom-toolbar .center').text(
//                         monthNames[c.currentMonth] + ', ' + c.currentYear
//                     );
//                     $('.calendar-custom-toolbar .left .link').on(
//                         'click',
//                         function () {
//                             calendarInline.prevMonth();
//                         }
//                     );
//                     $('.calendar-custom-toolbar .right .link').on(
//                         'click',
//                         function () {
//                             calendarInline.nextMonth();
//                         }
//                     );
//                 },
//                 monthYearChangeStart: function (c) {
//                     $('.calendar-custom-toolbar .center').text(
//                         monthNames[c.currentMonth] + ', ' + c.currentYear
//                     );
//                 },
//             },
//         });
//     });
//     $on('pageBeforeRemove', () => {
//         calendarDefault.destroy();
//         calendarDateFormat.destroy();
//         calendarDateTime.destroy();
//         calendarMultiple.destroy();
//         calendarRange.destroy();
//         calendarModal.destroy();
//         calendarInline.destroy();
//     });

//     return $render;
// };

// // fetch('js/backend.json')
// //     .then((response) => response.json())
// //     .then((data) => {
// //         localStorage.setItem('produtos', JSON.stringify(data));
// //         app.dialog.alert('algumacoisa salvou...');

// //         $('.posts').empty();
// //     })
// //     .catch((error) => app.dialog.alert('algumacoisa deu erro...'));

// // data.forEach((post) => {
// //     var algumacoisa = `
// //     <div class="card">
// //     <div class="card-header">
// //         <img
// //             src="img/user.jpg"
// //             alt=""
// //             style="width: 3em; height: 3em"
// //         />
// //         <p style="font-size: 16px; margin: 0 auto">
// //             nome do dono do post
// //             <br />
// //             algo
// //         </p>
// //     </div>
// //     <div class="card-content">
// //         <!-- Card content -->
// //         <div class="heart-container" title="Like">
// //             <input
// //                 type="checkbox"
// //                 class="checkbox"
// //                 id="Give-It-An-Id"
// //             />
// //             <div class="svg-container">
// //                 <svg
// //                     viewBox="0 0 24 24"
// //                     class="svg-outline"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                     <path
// //                         d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
// //                     ></path>
// //                 </svg>
// //                 <svg
// //                     viewBox="0 0 24 24"
// //                     class="svg-filled"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                     <path
// //                         d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"
// //                     ></path>
// //                 </svg>
// //                 <svg
// //                     class="svg-celebrate"
// //                     width="100"
// //                     height="100"
// //                     xmlns="http://www.w3.org/2000/svg"
// //                 >
// //                     <polygon
// //                         points="10,10 20,20"
// //                     ></polygon>
// //                     <polygon
// //                         points="10,50 20,50"
// //                     ></polygon>
// //                     <polygon
// //                         points="20,80 30,70"
// //                     ></polygon>
// //                     <polygon
// //                         points="90,10 80,20"
// //                     ></polygon>
// //                     <polygon
// //                         points="90,50 80,50"
// //                     ></polygon>
// //                     <polygon
// //                         points="80,80 70,70"
// //                     ></polygon>
// //                 </svg>
// //             </div>
// //         </div>
// //     </div>
// //     <div class="card-footer">
// //         algumacoisa
// //     </div>
// // </div>
// //     `;
// //     $('.posts').append(algumacoisa);
// // });
