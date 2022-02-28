import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from 'react-native'

const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <Container style={[baseStyle]}>
        <View>
          <Text style={[titleStyle]}>Perjalanan</Text>
          <Hr style={[breakStyle]} />
          <View style={[boxStyle]}>
            <Text style={[textSubTitle]}>
              Belum ada perjalanan yang dipesan!
            </Text>
            <Text style={[textBody]}>
              Saatnya menyiapkan tasmu dan mulai merencanakan petualanganmu
              berikutnya
            </Text>
          </View>
          <View style={[btnWrapperStyle]}>
            <TouchableOpacity
              activeOpacity={0.8}
              // onPress={() => console.log('babi kau')}
            >
              <Text style={[buttonStyle]}>Mulai mencari</Text>
            </TouchableOpacity>
          </View>
          <Hr style={[breakStyle]} />
          <View>
            <Text style={[textSmallBody]}>
              Tidak bisa menemukan reservasi Anda di sini?{' '}
              <Text style={[textUnderScore]}>Kunjungi Pusat Bantuan</Text>
            </Text>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  )
}

const btnWrapperStyle: ViewStyle = {
  alignSelf: 'flex-start',
  marginTop: 16,
}

const textStyle: TextStyle = {
  fontFamily: 'Airbnb Cereal App',
  color: 'black',
}

const titleStyle: TextStyle = {
  ...textStyle,
  fontSize: 24,
  lineHeight: 24 * 1.5,
  fontWeight: '600',
}

const baseStyle: ViewStyle = {
  marginTop: 40,
}

const boxStyle: ViewStyle = {
  marginTop: 8,
}

const textSubTitle: TextStyle = {
  ...textStyle,
  fontSize: 18,
  lineHeight: 18 * 1.3,
  fontWeight: '500',
}

const textBody: TextStyle = {
  ...textStyle,
  opacity: 0.7,
  paddingTop: 8,
  fontSize: 14,
  lineHeight: 14 * 1.5,
}

const textSmallBody: TextStyle = {
  ...textStyle,
  opacity: 0.7,
  paddingTop: 8,
  fontSize: 12,
  lineHeight: 12 * 1.3,
}

const textUnderScore: TextStyle = {
  ...textStyle,
  opacity: 1,
  textDecorationLine: 'underline',
  fontWeight: '600',
}

const buttonStyle: TextStyle = {
  ...textStyle,
  borderRadius: 8,
  paddingHorizontal: 16,
  paddingVertical: 8,
  borderWidth: 1,
  borderColor: 'black',
  fontWeight: '500',
}

const SPACE = 8

const breakStyle: ViewStyle = {
  marginVertical: SPACE,
  paddingVertical: SPACE,
}

// Line

type HrProps = {
  style?: ViewStyle[]
}

const Hr: React.FC<HrProps> = ({ style }) => {
  const oldStyle: ViewStyle = {
    borderBottomColor: 'gray',
    opacity: 0.4,
    borderBottomWidth: 1,
  }

  const newStyle = style ? [oldStyle, ...style] : [oldStyle]

  return <View style={newStyle} />
}

type ContainerProps = {
  style?: ViewStyle[]
}

const Container: React.FC<ContainerProps> = ({ style, children }) => {
  const newStyle = style ? [containerStyle, ...style] : [containerStyle]

  return <View style={newStyle}>{children}</View>
}

const containerStyle: ViewStyle = {
  paddingHorizontal: 24,
}

export default Home
