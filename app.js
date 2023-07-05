import pkg from 'agora-token';

const { RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole } = pkg;

const generateRtcToken = (uid,channelName) => {
    // Rtc Examples
    const appId = '37ee21a6eed841d58a6a6aff122d157d';
    const appCertificate = '312a8cd44e444d20bc4cda43ad31cfea';

    const role = RtcRole.PUBLISHER;
  
    const expirationTimeInSeconds = 3600
  
    const currentTimestamp = Math.floor(Date.now() / 1000)
  
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

    const tokenA = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs);

    console.log("Token With Integer Number Uid: " + tokenA);
    
    return tokenA
  }

  export default generateRtcToken;