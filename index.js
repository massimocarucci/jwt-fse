// Import stylesheets
import './style.css';

var rs = require('jsrsasign');
var rsu = require('jsrsasign-util');

const pkSignature = `-----BEGIN CERTIFICATE-----
MIIFdjCCA16gAwIBAgIUHjGLZPicaWVLCeZ0GNJ3ZA8UzQwwDQYJKoZIhvcNAQEL
BQAwVzEnMCUGA1UEAwweQ0EgTWluaXN0ZXJvIGRlbGxhIFNhbHV0ZSBUZXN0MR8w
HQYDVQQKDBZNaW5pc3Rlcm8gZGVsbGEgU2FsdXRlMQswCQYDVQQGEwJJVDAeFw0y
MzA4MDIwOTE0MDRaFw0yNjA4MDIwOTE0MDNaMHcxCzAJBgNVBAYTAklUMR8wHQYD
VQQKDBZNaW5pc3Rlcm8gZGVsbGEgU2FsdXRlMR8wHQYDVQRhDBZDRjpJVC1QUk9W
QVgwMFgwMFgwMDBZMSYwJAYDVQQDDB1TMSMxMTFDT05ORUNUSU5GT1JNQVRJQ1NT
UkxYWDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALmVFQutnk56YDj/
lkv8FwQN6kLfdxt6/y3OFyfrsj6JmNdHN0pVdPHQetolYDk/0P7yvxzv7Bkp4fTa
YZul68mcjyL/eJhPej3LCD/iFCB9SFMRuxfWxson9HYk0hr2PXHfdEL6Gz9qR/Mg
1KAqAeZNDo+LLgU/aGUyGnELP//fiUSZACZY89OSUht09DDCuNIKMuLqODeHTLz4
1oa4J10Z7RFWdXLfYg2Kmcuo4pfnF/IyjnjjjmiJRnMg6qW/ni89bOrehfij6Raa
IXb2ogUuN48Eq9URGX2cyJwAT/mkqYO8h5uFs2SbhKxzVMNsFhA8vaDxLzCbg5wy
bL4XuJUCAwEAAaOCARgwggEUMB8GA1UdIwQYMBaAFBY5qRoFibcPLbI17cIJmsUD
gyI/MBIGA1UdIAQLMAkwBwYFK0wdAQswga0GA1UdHwSBpTCBojCBn6CBnKCBmYaB
lmh0dHBzOi8vY2Fzb2dlaXN2aWwuc29nZWkuaXQvZWpiY2EvcHVibGljd2ViL3dl
YmRpc3QvY2VydGRpc3Q/Y21kPWNybCZpc3N1ZXI9Q04lM0RDQStNaW5pc3Rlcm8r
ZGVsbGErU2FsdXRlK1Rlc3QlMkNPJTNETWluaXN0ZXJvK2RlbGxhK1NhbHV0ZSUy
Q0MlM0RJVDAdBgNVHQ4EFgQUdVb6k6gRcXUUKKN3hzslBYFaxfEwDgYDVR0PAQH/
BAQDAgZAMA0GCSqGSIb3DQEBCwUAA4ICAQBVNVWcIahaFwAtfqe9Szj0BW4ocvrp
VPvGYJl/2gB7kfxi6gIJ4QNM/zz2IpChPp7NMBQaztsaFDd18VSKmdYazwzbousK
NvtuajzfJQqzBo0WGck6VXOYNa+XDdIKN1W26EPdzLV0WRiGFz7WOfXxZdX3DwAM
dl1GhYnfFkl4uCWxfQGyndhUYWUe3hNt0iLotjg/kJ/IM6ZffqSvYVLoECJpuGab
2KDYe+I3eHm8a2Uy1JjuvhHRlHlykdVPZO2Cdg8MfvH+G2fg3uUQO2z6xTo1nkyp
QV8+UrIn/1dHO5JygjRbVFhT3eVSxw4sobmLx6CFVS4jYjK2Hk2Mb+gDqlPzKGLi
UfaqWS3HtQK5G6UYkNkcd27cKafRSZxpMs9x5tsrkRDK8SWk/YGlyaFF8KZJNGnK
XJYAJbRfimmQpZ/9I5ZdGXr0ZzAyUEakwFLxBYRem+EegH8TkL8aRv3g0B4I0x6H
3HGl6Nut23CjQyT8LYu4KYuqyRROExrck6WFoEoAL93Yy3oE15jRhPHHti1fljeX
pI2L0yfg+bBJSHjMA4tPtr96EdMs7R10NU9tjrHeIX5Vy9scFQMKV6tHYqwSKFAJ
maxPYTau3SC67tk1+W7krM/OENPEP/ROVjP7LXPKQHehEvL3xfBF3NLkn3v8iLz3
XlJu41jMK4xDMg==
-----END CERTIFICATE-----`;

var oHeader = { alg: 'HS256', typ: 'JWT' };

var authPayload = {};
var signPayload = {}

var tNow = KJUR.jws.IntDate.get('now');
var tEnd = KJUR.jws.IntDate.get('now + 1day');


authPayload.iss = 'Connect Informatics';
authPayload.sub = '';
authPayload.nbf = tNow;
authPayload.iat = tNow;
authPayload.exp = tEnd;

signPayload.iss = 'Connect Informatics;
signPayload.sub = '';
signPayload.nbf = tNow;
signPayload.iat = tNow;
signPayload.exp = tEnd;

var sHeader = JSON.stringify(oHeader);
var sAuthPayload = JSON.stringify(authPayload);
var sSignPayload = JSON.stringify(signPayload);

var authJWT = KJUR.jws.JWS.sign('HS256', sHeader, sAuthPayload, privateKeyPEM);
var signJWT = KJUR.jws.JWS.sign('HS256', sHeader, sSignPayload, privateKeyPEM);


console.log(authJWT)
console.log(signJWT)