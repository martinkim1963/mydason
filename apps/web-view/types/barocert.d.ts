// barocert.d.ts

declare module 'barocert' {
  type TokenBuilder = {
    _options: {
      LinkID: string
      SecretKey: string
      UseLocalTimeYN?: boolean
      AuthURL?: string
      defaultErrorHandler?: (Error: BarocertException) => void
    }
  }

  /**
   * 카카오 본인인증 서비스에 대한 사용자 정의 타입이다.
   */
  export class KakaocertService {
    constructor(config: { LinkID: string; SecretKey: string })
    _config: {
      LinkID: string
      SecretKey: string
    }
    _tokenBuilder: TokenBuilder
    _encrypt: (str: string) => string
    requestIdentity(
      clientCode: string,
      identity: KakaoIdentityRequest,
      success: (res: KakaoIdentityReceiptResponse) => void,
      error: (err: BarocertException) => void
    ): KakaoIdentityReceiptResponse
    getIdentityStatus(
      clientCode: string,
      receiptId: string,
      success: (res: KakaoIdentityStatusResponse) => void,
      error: (err: BarocertException) => void
    ): KakaoIdentityStatusResponse
    verifyIdentity(
      clientCode: string,
      receiptId: string,
      success: (res: KakaoIdentityResult) => void,
      error: (err: BarocertException) => void
    ): KakaoIdentityResult
  }

  /**
   * 네이버 본인인증 서비스에 대한 사용자 정의 타입이다.
   */
  export class NavercertService {
    constructor(config: { LinkID: string; SecretKey: string })
    _events?: object
    _eventsCount?: number
    _maxListeners?: number
    _config: {
      LinkID: string
      SecretKey: string
      UseLocalTimeYN: boolean
    }
    ServiceID?: string
    IPRestrictOnOff?: boolean
    UseStaticIP?: boolean
    ServiceURL?: string
    _tokenBuilder: TokenBuilder
    _Linkhub_Token_Cash?: object
    _scopes?: string[]
    _encrypt: (str: string) => string
    requestIdentity(
      clientCode: string,
      identity: NaverIdentityRequest,
      success: (res: NaverIdentityReceiptResponse) => NaverIdentityReceiptResponse,
      error: (err: BarocertException) => BarocertException
    ): NaverIdentityReceiptResponse | BarocertException
  }

  /**
   * PASS 본인인증 서비스에 대한 사용자 정의 타입이다.
   */
  export class PasscertService {
    constructor(config: { LinkID: string; SecretKey: string })
    _events?: object
    _eventsCount?: number
    _maxListeners?: number
    _config: {
      LinkID: string
      SecretKey: string
      IPRestrictOnOff?: boolean
      UseStaticIP?: boolean
      defaultErrorHandler?: (Error: BarocertException) => void
    }
    ServiceID?: string
    IPRestrictOnOff?: boolean
    UseStaticIP?: boolean
    ServiceURL?: string
    _tokenBuilder: TokenBuilder
    _Linkhub_Token_Cash?: object
    _scopes?: string[]
    _encrypt: (str: string) => string
    requestIdentity(
      clientCode: string,
      identity: PassIdentityRequest,
      success: (res: PassIdentityReceiptResponse) => void,
      error: (err: BarocertException) => void
    ): PassIdentityReceiptResponse
    getIdentityStatus(
      clientCode: string,
      receiptId: string,
      success: (res: PassIdentityStatusResponse) => void,
      error: (err: BarocertException) => void
    ): PassIdentityStatusResponse
    verifyIdentity(
      clientCode: string,
      receiptId: string,
      identityVerify: PassIdentityVerifyInfoRequest,
      success: (res: PassIdentityResult) => void,
      error: (err: BarocertException) => void
    ): PassIdentityResult
  }

  /**
   * 본인인증 서비스 이용 도중 발생하는 예외에 대한 타입이다.
   *
   * @property code - API 처리에 대한 응답 코드
   * @property message - API 처리에 대한 응답 메시지
   */
  type BarocertException = {
    code: number
    message: string
  }

  /**
   * 카카오 본인인증 요청 타입이다.
   *
   * @property receiverHP - 수신자 휴대전화 번호 (최대 11자, 하이픈 제외)
   * @property receiverName - 수신자 성명 (최대 80자)
   * @property receiverBirthday - 수신자 생년월일 (최대 8자, yyyyMMdd)
   * @property reqTitle - 인증요청 메시지 제목 (최대 40자)
   * @property extraMessage - 인증요청 메시지 제목 (최대 500자)
   * @property expireIn - 요청 만료시간 (최대 1,000초 / 권장 300초)
   * @property token - 원문 - (최대 40자)
   * @property appUseYN - 앱투앱 인증 방식 사용 여부 (true: 앱투앱 인증, false: 채널 메시지 인증)
   * @property returnURL - 앱투앱 인증 방식 사용 시, 본인인증 완료 후 복귀할 URL (최대 1,000자, appUseYN이 true 일 경우)
   */
  type KakaoIdentityRequest = {
    receiverHP: string
    receiverName: string
    receiverBirthday: string
    reqTitle: string
    extraMessage?: string
    expireIn: number
    token: string
    appUseYN?: boolean
    returnURL?: string
  }

  /**
   * 카카오 본인인증 요청에 대한 응답 타입이다.
   *
   * @property receiptId - 접수 아이디
   * @property scheme - 앱스킴 (appUseYN이 true 일 경우 반환)
   */
  type KakaoIdentityReceiptResponse = {
    receiptID: string
    scheme?: string
  }

  /**
   * 카카오 본인인증 상태 확인에 대한 응답 타입이다.
   *
   * @property receiptId - 접수 아이디
   * @property clientCode - 이용 기관 코드
   * @property state - 본인인증 상태 (0: 대기, 1: 완료, 2: 만료)
   * @property requestDT - 전자서명 요청일시 (yyyyMMddHHmmss)
   * @property viewDT - 전자서명 조회일시 (yyyyMMddHHmmss)
   * @property completeDT - 전자서명 완료일시 (yyyyMMddHHmmss)
   * @property expireDT - 전자서명 만료일시 (yyyyMMddHHmmss)
   * @property verifyDT - 전자서명 검증일시 (yyyyMMddHHmmss)
   */
  type KakaoIdentityStatusResponse = {
    receiptId: string
    clientCode: string
    state: number
    requestDT: string
    viewDT?: string
    completeDT?: string
    expireDT: string
    verifyDT?: string
  }

  /**
   * 카카오 본인인증 검증에 대한 결괏값 응답 타입이다.
   *
   * @property receiptId - 접수 아이디
   * @property state - 본인인증 상태 (0: 대기, 1: 완료, 2: 만료)
   * @property signedData - 전자서명 값
   * @property ci - CI 값
   */
  type KakaoIdentityResult = {
    receiptId: string
    state: number
    signedData: string
    ci?: string
  }

  /**
   * PASS 본인인증 요청 타입이다.
   *
   * @property receiverHP - 수신자 휴대전화 번호 (최대 11자, 하이픈 제외)
   * @property receiverName - 수신자 성명 (최대 80자)
   * @property receiverBirthday - 수신자 생년월일 (최대 8자, yyyyMMdd)
   * @property reqTitle - 인증요청 메시지 제목 (최대 40자)
   * @property reqMessage - 인증요청 메시지 내용 (최대 500자)
   * @property callCenterNum - 고객센터 연락처 (최대 12자)
   * @property expireIn - 요청 만료시간 (최대 1,000초 / 권장 300초)
   * @property token - 서명 원문 (최대 2,800자)
   * @property userAgreementYN - 사용자 동의 필요 여부 (true: 사용자 동의 필요, false: 사용자 동의 필요 없음)
   * @property receiverInfoYN - 사용자 정보 포함 여부 (true: 사용자 정보 포함, false: 사용자 정보 미포함)
   * @property appUseYN - 앱투앱 인증 방식 이용 여부 (true: 앱투앱 인증, false: 푸시 인증)
   * @property telcoType - 통신사 유형 ['SKT', 'KT', 'LGU'] (appUseYN이 true 일 경우 필수)
   * @property deviceOSType - 모바일 장비 운영체제 ['ANDROID', 'IOS'] (appUseYN이 true 일 경우 필수)
   */
  type PassIdentityRequest = {
    receiverHP: string
    receiverName: string
    receiverBirthday?: string
    reqTitle: string
    reqMessage: string
    callCenterNum: string
    expireIn: number
    token: string
    userAgreementYN?: boolean
    receiverInfoYN?: boolean
    appUseYN?: boolean
    telcoType?: string
    deviceOSType?: string
  }

  /**
   * PASS 본인인증 요청에 대한 응답 타입이다.
   *
   * @property receiptID - 접수 아이디
   * @property scheme - 앱스킴 (appUseYN이 true 일 경우 반환)
   */
  type PassIdentityReceiptResponse = {
    receiptID: string
    scheme?: string
  }

  /**
   * PASS 본인인증 상태 확인에 대한 응답 타입이다.
   *
   * @property receiptId - 접수 아이디
   * @property clientCode - 이용 기관 코드
   * @property state - 본인인증 상태 (0: 대기, 1: 완료, 2: 만료, 3: 거절, 4: 실패, 5: 미처리)
   * @property requestDT - 전자서명 요청일시 (yyyyMMddHHmmss)
   * @property completeDT - 전자서명 완료일시 (yyyyMMddHHmmss)
   * @property expireDT - 전자서명 만료일시 (yyyyMMddHHmmss)
   * @property rejectDT - 전자서명 거절일시 (yyyyMMddHHmmss)
   */
  type PassIdentityStatusResponse = {
    receiptId: string
    clientCode: string
    state: number
    requestDT: string
    completeDT?: string
    expireDT: string
    rejectDT?: string
  }

  /**
   * PASS 본인인증 서명검증 요청 정보 타입이다.
   *
   * @property receiverHP - 수신자 휴대전화 번호 (최대 11자, 하이픈 제외)
   * @property receiverName - 수신자 성명 (최대 80자)
   */
  type PassIdentityVerifyInfoRequest = {
    receiverHP: string
    receiverName: string
  }

  /**
   * PASS 본인인증 검증에 대한 결괏값 응답 타입이다.
   *
   * @property receiptId - 접수 아이디
   * @property state - 본인인증 상태 (0: 대기, 1: 완료, 2: 만료, 3: 거절, 4: 실패, 5: 미처리)
   * @property receiverName - 수신자 성명 (receiverInfoYN 이 true 일 경우 반환)
   * @property receiverYear - 수신자 출생년도 (형식: yyyy, receiverInfoYN 이 true 일 경우 반환)
   * @property receiverDay - 수신자 출생월일 (형식: MMdd, receiverInfoYN 이 true 일 경우 반환)
   * @property receiverGender - 수신자 성별 [M: 남성, F: 여성] (receiverInfoYN 이 true 일 경우 반환)
   * @property receiverForeign - 수신자 외국인 여부 [Y: 외국인, N: 내국인] (receiverInfoYN 이 true 일 경우 반환)
   * @property receiverTelcoType - 수신자 통신사 유형 ['SKT', 'KT', 'LGU'] (receiverInfoYN 이 true 일 경우 반환)
   * @property signedData - 전자서명 값
   * @property ci - CI 값
   */
  type PassIdentityResult = {
    receiptId: string
    state: string
    receiverName?: string
    receiverYear?: string
    receiverDay?: string
    receiverGender?: string
    receiverForeign?: string
    receiverTelcoType?: string
    signedData: string
    ci: string
  }

  type NaverIdentityRequest = {
    receiverHP: string // 수신자 휴대폰번호 - 11자 (하이픈 제외)
    receiverName: string // 수신자 성명 - 80자
    receiverBirthday: string // 수신자 생년월일 - 8자 (yyyyMMdd)
    callCenterNum: string // 고객센터 연락처 - 최대 12자
    expireIn: number // 인증요청 만료시간 - 최대 1,000(초)까지 입력 가능
    appUseYN: boolean // AppToApp 인증요청 여부
    deviceOSType?: string // 모바일장비 유형('ANDROID', 'IOS'), 대문자 입력(대소문자 구분)
    returnURL?: string // AppToApp 방식 이용시, 호출할 URL
  }

  /**
   * 네이버 본인인증 요청에 대한 응답 타입이다.
   *
   * @property receiptId - 접수 아이디
   * @property scheme - 앱스킴 (appUseYN이 true 일 경우 반환)
   * @property marketUrl - 인증요청 마켓 URL (appUseYN이 true 일 경우 반환)
   */
  type NaverIdentityReceiptResponse = {
    receiptId: string
    scheme: string
    marketUrl: string
  }

  /**
   * 네이버 본인인증 상태확인에 대한 응답 타입이다.
   */
  type NaverIdentityStatusResponse = {
    receiptId: string
    clientCode: string
    state: number
    expireDT: string
  }

  /**
   * 네이버 본인인증 검증에 대한 결괏값 응답 타입이다. (cf. 4.5 IdentityResult)
   */
  type NaverIdentityResult = {
    receiptId: string
    state: number
    receiverName: string
    receiverYear: string
    receiverDay: string
    receiverHP: string
    receiverGender: string
    receiverEmail: string
    receiverForeign: string
    signedData: string
    ci: string
  }
}
