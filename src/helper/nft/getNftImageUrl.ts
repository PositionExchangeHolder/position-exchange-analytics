const NFT_GRADE_CIDs = [
  'bafkreia6hfxtjcyslqbbfecpcbdmem7qwbvdn4zqe6qjbz3cfg2r5ubeue', // Grade 1
  'bafkreiasiio4n6hcz5pdeiqr7vrmritiesztakm6gxymnmxfvjfotdkqzu', // Grade 2
  'bafkreigp6junwbhqk6zaxktttx5zfb46g2xys3u6ajwuzr2zxywtfbvil4', // Grade 3
  'bafkreieqdxexe27pq2dpl4oxrjsrn6l4s344fojplmninuaovy6dnhjmwi', // Grade 4
  'bafkreid5pk2kphbvt4dgklpe45lbelfpp5bb4aeieybppx4e6jvw7zeasu', // Grade 5
  'bafkreibkrflaenflffy3gwdqwpn3ypaoaaruw72hjhby2wm2wzp3mstmxu', // Grade 6
]

export const getNftGradeImageUrl = (grade: string | number): string => {
  return `${NFT_GRADE_CIDs[+grade]}.ipfs.nftstorage.link`
}
