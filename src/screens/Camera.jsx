// import React, {useState, useEffect} from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';

// const Cameras = () => {
//   const [hasCameraPermission, setHasCameraPermission] = useState(false); // Kamera izni durumu
//   const [isCameraOpen, setIsCameraOpen] = useState(false); // Kameranın açık olup olmadığını kontrol ederiz
//   const [isDevicesReady, setIsDevicesReady] = useState(false); // Cihazların hazır olup olmadığını kontrol ederiz

//   const devices = useCameraDevices(); // Kameraların listesine erişim
//   const device = devices.back; // Arka kamerayı alıyoruz

//   useEffect(() => {
//     const requestPermission = async () => {
//       const status = await Camera.requestCameraPermission();
//       setHasCameraPermission(status === 'authorized');
//     };

//     // Kamera izni istiyoruz
//     requestPermission();
//   }, []);

//   useEffect(() => {
//     // Cihazlar yüklendikten sonra hazır olduğunu belirtiyoruz
//     if (devices != null && devices.back != null) {
//       setIsDevicesReady(true);
//     }
//   }, [devices]);

//   // Eğer cihazlar yüklenmemişse veya arka kamera yoksa, cihazları bekle
//   if (!isDevicesReady) {
//     return (
//       <View style={styles.container}>
//         <Text>Kamera açılıyor...</Text>
//       </View>
//     );
//   }

//   // Eğer cihazlar ve arka kamera mevcutsa
//   if (device == null) {
//     return (
//       <View style={styles.container}>
//         <Text>Arka kamera bulunamadı.</Text>
//       </View>
//     );
//   }

//   // Kamera açma işlevi
//   const openCamera = () => {
//     setIsCameraOpen(true);
//   };

//   // Kamera kapama işlevi
//   const closeCamera = () => {
//     setIsCameraOpen(false);
//   };

//   return (
//     <View style={styles.container}>
//       {hasCameraPermission ? (
//         <>
//           {/* Kamera açılınca */}
//           {isCameraOpen ? (
//             <Camera
//               style={styles.camera}
//               device={device}
//               isActive={isCameraOpen}
//             />
//           ) : (
//             <Button title="Kamera Aç" onPress={openCamera} /> // Kamera açma butonu
//           )}

//           {/* Kamera kapatma butonu */}
//           {isCameraOpen && (
//             <Button title="Kamera Kapat" onPress={closeCamera} />
//           )}
//         </>
//       ) : (
//         <Text>Kamera izni verilmedi!</Text> // Kamera izni verilmediğinde kullanıcıya uyarı
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   camera: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Cameras;
