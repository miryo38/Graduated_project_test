# react-native design
#버전관리<br/> 
react-native-cli: 2.0.1<br>
node.js: 16.6.0<br>
npm : 7.19.1<br>
Python 2.7.18<br>
java version "1.8.0_211"<br>
javac 1.8.0_211<br> 
Android Debug Bridge version 1.0.41<br>
Version 31.0.3-7562133<br>

#사용방법<br/>
 npm install => npm run android 

파이어스토어 기반 회원가입 구축 현재 구글 로그인 구현, 카카오톡은 구현중 에러가 많이나서 나중에 구현 예정

프로필수정 부분 카메라는 작동되는데 갤러리에서 이미지 선택후 저장하는게 오류나서 수정 예정 




** 파이어스토어 데이터 참조해서 사용하는법 **

import { AuthContext } from '../../utils/AuthProvider';
import firestore from '@react-native-firebase/firestore'; 추가


const {user, logout} = useContext(AuthContext);  선언, 생성
const [userData, setUserData] = useState(null);

const getUser = async() => {     
    const currentUser = await firestore()
    .collection('users')
    .doc(user.uid)
    .get()
    .then((documentSnapshot) => {
      if( documentSnapshot.exists ) {
        console.log('User Data', documentSnapshot.data());
        setUserData(documentSnapshot.data());
      }
    })
  }

  useEffect(() => {
    getUser();
  }, []);

불러오는 방식 예) 이름 = {userData ? userData.name : ''}
                  <Text style={styles.titleText}>{userData ? userData.name : ''}님의 미니홈피</Text>    

                 이미지 = source={{uri: userData ? userData.userImg || 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}/>

 잘 모르겠으면 ProfileScreen, EditProfile 참고                