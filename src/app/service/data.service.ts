import {Injectable} from '@angular/core';
import {LatLngExpression} from 'leaflet';

export class Marker {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
  country: string;
  objectid: string;
  dataHistories: any;
  lastUpdated: string;
}

@Injectable()
export class DataService {
  markers: Marker[] = [{
    'country': 'MX',
    'dataHistories': [{'dead': '2', 'infected': '203', 'recovered': '4', 'sick': '197', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '203',
      'recovered': '4',
      'sick': '197',
      'time': 1584810002408
    }],
    'id': '044b3639-9f32-4440-ab80-201e1dca8876',
    'lastUpdated': '2020-03-21T16:43:02.654Z',
    'latitude': '23.634501',
    'longitude': '-102.552788',
    'name': 'Mexico',
    'objectid': 'I4OJ6z9Vjs1byOcbsJrd'
  }, {
    'country': 'CA',
    'dataHistories': [{'dead': '2', 'infected': '318', 'recovered': '5', 'sick': '311', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '318',
      'recovered': '5',
      'sick': '311',
      'time': 1584810002408
    }],
    'id': '091fcec6-e0fb-442b-a084-9c95806f13d1',
    'lastUpdated': '2020-03-21T16:42:03.053Z',
    'latitude': '51.2538',
    'longitude': '-85.3232',
    'name': 'Ontario',
    'objectid': 'Rx4TuyMpfGb3S8wYJX0x'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '24', 'infected': '6740', 'recovered': '149', 'sick': '6567', 'time': 1584809582622}, {
      'dead': '24',
      'infected': '6740',
      'recovered': '149',
      'sick': '6567',
      'time': 1584810002408
    }],
    'id': '00febcb5-a0d2-4425-8cc1-2c03abbe1898',
    'lastUpdated': '2020-03-21T16:42:03.436Z',
    'latitude': '51.4332',
    'longitude': '7.6616',
    'name': 'Nordrhein-Westfalen',
    'objectid': 'MjpYq3zQyAvSQlVVYjD2'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '24', 'recovered': '9', 'sick': '15', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '24',
      'recovered': '9',
      'sick': '15',
      'time': 1584810002408
    }],
    'id': '08c94f27-e14f-4618-82af-b2170e90abc9',
    'lastUpdated': '2020-03-21T16:34:03.507Z',
    'latitude': '26.8467',
    'longitude': '80.9462',
    'name': 'Uttar Pradesh',
    'objectid': 'VcKcLdCkC6YpPfIDnRVD'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '37', 'recovered': '0', 'sick': '37', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '37',
      'recovered': '0',
      'sick': '37',
      'time': 1584810002408
    }],
    'id': '0499c652-4201-4d5a-b23c-bc58eb5b70ee',
    'lastUpdated': '2020-03-21T16:42:03.208Z',
    'latitude': '41.4925',
    'longitude': '-99.9018',
    'name': 'Nebraska',
    'objectid': 'SakhKQzKu1LRI8laqdQq'
  }, {
    'country': 'DZ',
    'dataHistories': [{'dead': '15', 'infected': '139', 'recovered': '65', 'sick': '59', 'time': 1584809582622}, {
      'dead': '15',
      'infected': '139',
      'recovered': '65',
      'sick': '59',
      'time': 1584810002408
    }],
    'id': '0363fef0-4485-496c-8583-c62b34fa551e',
    'lastUpdated': '2020-03-21T16:43:02.730Z',
    'latitude': '28.033886',
    'longitude': '1.659626',
    'name': 'Algeria',
    'objectid': 'AwN0CScPDApcLFgz6e3z'
  }, {
    'country': 'LT',
    'dataHistories': [{'dead': '1', 'infected': '83', 'recovered': '1', 'sick': '81', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '83',
      'recovered': '1',
      'sick': '81',
      'time': 1584810002408
    }],
    'id': '02d4c690-f377-4b79-8ce8-b89943f10f02',
    'lastUpdated': '2020-03-21T16:43:02.638Z',
    'latitude': '55.621011',
    'longitude': '23.804991',
    'name': 'Lithuania',
    'objectid': '694ON7d0mRJDeM1gHBTR'
  }, {
    'country': 'UA',
    'dataHistories': [{'dead': '3', 'infected': '41', 'recovered': '1', 'sick': '37', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '41',
      'recovered': '1',
      'sick': '37',
      'time': 1584810002408
    }],
    'id': '0036cb42-4f61-426e-91a2-45842f069a59',
    'lastUpdated': '2020-03-21T16:43:03.053Z',
    'latitude': '50.4501',
    'longitude': '30.5234',
    'name': 'Ukraine',
    'objectid': 'flbZ2kaR5kBuV8XZ2Nsu'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '3', 'infected': '126', 'recovered': '0', 'sick': '123', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '126',
      'recovered': '0',
      'sick': '123',
      'time': 1584810002408
    }],
    'id': '091a4385-3548-46ed-80d9-b6d1749fb241',
    'lastUpdated': '2020-03-21T16:42:03.048Z',
    'latitude': '34.003307',
    'longitude': '-80.525613',
    'name': 'South Carolina',
    'objectid': 'ONU4CK8QjViFHKg2w5if'
  }, {
    'country': 'PA',
    'dataHistories': [{'dead': '1', 'infected': '200', 'recovered': '1', 'sick': '198', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '200',
      'recovered': '1',
      'sick': '198',
      'time': 1584810002408
    }],
    'id': '0decf93b-b87f-4438-b32c-f4832c3e9e9d',
    'lastUpdated': '2020-03-21T16:43:02.749Z',
    'latitude': '8.538',
    'longitude': '-80.7821',
    'name': 'Panama',
    'objectid': 'R8YCgephnxTufvcPWMgx'
  }, {
    'country': 'CA',
    'dataHistories': [{'dead': '8', 'infected': '348', 'recovered': '4', 'sick': '336', 'time': 1584809582622}, {
      'dead': '8',
      'infected': '348',
      'recovered': '4',
      'sick': '336',
      'time': 1584810002408
    }],
    'id': '03274662-e66d-42d4-9ecd-7383beef826e',
    'lastUpdated': '2020-03-21T16:42:02.945Z',
    'latitude': '53.7267',
    'longitude': '-127.6476',
    'name': 'British Columbia',
    'objectid': '4hfZRUoUgI4a3vrG0GBk'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '230', 'recovered': '0', 'sick': '230', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '230',
      'recovered': '0',
      'sick': '230',
      'time': 1584810002408
    }],
    'id': '0c8adf6f-f203-45d7-8400-feeba95327f1',
    'lastUpdated': '2020-03-21T16:42:02.966Z',
    'latitude': '35.7596',
    'longitude': '-79.0193',
    'name': 'North Carolina',
    'objectid': 'NC64Qp5kTqAfiTuR27k8'
  }, {
    'country': 'SV',
    'dataHistories': [{'dead': '0', 'infected': '3', 'recovered': '0', 'sick': '3', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '3',
      'recovered': '0',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': '0dd2cf1d-24c9-4131-a7b3-cb3e31845533',
    'lastUpdated': '2020-03-21T16:43:02.997Z',
    'latitude': '13.803',
    'longitude': '-88.9053',
    'name': 'El Salvador',
    'objectid': 'Cgvmtle61ehMvCzRzYx7'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '4', 'infected': '220', 'recovered': '0', 'sick': '216', 'time': 1584809582622}, {
      'dead': '4',
      'infected': '220',
      'recovered': '0',
      'sick': '216',
      'time': 1584810002408
    }],
    'id': '04e19c26-995c-42bb-8c3a-292de5f6749c',
    'lastUpdated': '2020-03-21T16:42:03.236Z',
    'latitude': '44.5',
    'longitude': '-89.5',
    'name': 'Wisconsin',
    'objectid': 'xSHgaJlyPxHFWB6hhyng'
  }, {
    'country': 'OM',
    'dataHistories': [{'dead': '0', 'infected': '52', 'recovered': '13', 'sick': '39', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '52',
      'recovered': '13',
      'sick': '39',
      'time': 1584810002408
    }],
    'id': '14c7c0ee-ed75-4719-8458-90e4db7ab63e',
    'lastUpdated': '2020-03-21T16:43:02.734Z',
    'latitude': '21.473534',
    'longitude': '55.975414',
    'name': 'Oman',
    'objectid': 'f9kmlhYtc3WA3kjbWszW'
  }, {
    'country': 'GR',
    'dataHistories': [{'dead': '13', 'infected': '530', 'recovered': '19', 'sick': '498', 'time': 1584809582622}, {
      'dead': '13',
      'infected': '530',
      'recovered': '19',
      'sick': '498',
      'time': 1584810002408
    }],
    'id': '1d936272-2c3d-4393-af77-148d53d9f25b',
    'lastUpdated': '2020-03-21T16:43:02.640Z',
    'latitude': '40.6401',
    'longitude': '22.9444',
    'name': 'Greece',
    'objectid': 'Dtr1lap1RpJpXJdXGJiW'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '1', 'infected': '77', 'recovered': '0', 'sick': '76', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '77',
      'recovered': '0',
      'sick': '76',
      'time': 1584810002408
    }],
    'id': '0957d75b-b8bd-4214-840b-09c40643e578',
    'lastUpdated': '2020-03-21T16:42:02.993Z',
    'latitude': '38.9072',
    'longitude': '-77.0369',
    'name': 'Washington, D.C.',
    'objectid': 'q5cfvHprVTraL1yXnhDx'
  }, {
    'country': 'DO',
    'dataHistories': [{'dead': '3', 'infected': '112', 'recovered': '0', 'sick': '109', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '112',
      'recovered': '0',
      'sick': '109',
      'time': 1584810002408
    }],
    'id': '1441071b-a285-482c-b4ab-61219c133af2',
    'lastUpdated': '2020-03-21T16:43:02.710Z',
    'latitude': '18.947829',
    'longitude': '-70.430399',
    'name': 'Dominican Republic',
    'objectid': 'FuiVEJvWb0QMCpxJ3563'
  }, {
    'country': 'AL',
    'dataHistories': [{'dead': '2', 'infected': '76', 'recovered': '2', 'sick': '72', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '76',
      'recovered': '2',
      'sick': '72',
      'time': 1584810002408
    }],
    'id': '06067d5c-c3d6-4f32-b3ae-ab46f4e82d55',
    'lastUpdated': '2020-03-21T16:43:02.630Z',
    'latitude': '40.973765',
    'longitude': '20.010162',
    'name': 'Albania',
    'objectid': 'cCGmFmwHOoBrEpvG3qBP'
  }, {
    'country': 'VI',
    'dataHistories': [{'dead': '0', 'infected': '6', 'recovered': '0', 'sick': '6', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '6',
      'recovered': '0',
      'sick': '6',
      'time': 1584810002408
    }],
    'id': '0d713a8b-126c-4cde-b037-88217814a7b2',
    'lastUpdated': '2020-03-21T16:43:03.051Z',
    'latitude': '18.3358',
    'longitude': '-64.8963',
    'name': 'U.S. Virgin Islands',
    'objectid': 'QqhD3YDMKXojvQY3Yu41'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '17', 'recovered': '0', 'sick': '17', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '17',
      'recovered': '0',
      'sick': '17',
      'time': 1584810002408
    }],
    'id': '17e06c28-887b-465a-9e2c-d778607eed00',
    'lastUpdated': '2020-03-21T16:34:03.516Z',
    'latitude': '29.0588',
    'longitude': '76.0856',
    'name': 'Haryana',
    'objectid': 'ubUuY89n0cXVgahI4Ytp'
  }, {
    'country': 'CA',
    'dataHistories': [{'dead': '1', 'infected': '139', 'recovered': '0', 'sick': '138', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '139',
      'recovered': '0',
      'sick': '138',
      'time': 1584810002408
    }],
    'id': '06fc21b3-481b-4eef-ac96-cf8ac1686086',
    'lastUpdated': '2020-03-21T16:42:02.911Z',
    'latitude': '46.8139',
    'longitude': '-71.208',
    'name': 'Quebec',
    'objectid': 'SHoOE3NiJgWAlDVBzwYH'
  }, {
    'country': 'JM',
    'dataHistories': [{'dead': '1', 'infected': '19', 'recovered': '2', 'sick': '16', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '19',
      'recovered': '2',
      'sick': '16',
      'time': 1584810002408
    }],
    'id': '1bf62299-1b5a-43c3-be13-b0f819b7e719',
    'lastUpdated': '2020-03-21T16:43:03.017Z',
    'latitude': '18.1096',
    'longitude': '-77.2975',
    'name': 'Jamaica',
    'objectid': 'vMGALmMJbagxGIbLyFfS'
  }, {
    'country': 'NA',
    'dataHistories': [{'dead': '0', 'infected': '3', 'recovered': '0', 'sick': '3', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '3',
      'recovered': '0',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': '254e1bf7-87ca-4188-ad08-790fc5bef0e1',
    'lastUpdated': '2020-03-21T16:43:02.936Z',
    'latitude': '-22.95763',
    'longitude': '18.4904',
    'name': 'Namibia',
    'objectid': 'xtX46kxBlEapOMdD1Emh'
  }, {
    'country': 'NO',
    'dataHistories': [{'dead': '7', 'infected': '2081', 'recovered': '1', 'sick': '2073', 'time': 1584809582622}, {
      'dead': '7',
      'infected': '2081',
      'recovered': '1',
      'sick': '2073',
      'time': 1584810002408
    }],
    'id': '14195031-fc52-417d-a8ef-b392dbe4b142',
    'lastUpdated': '2020-03-21T16:43:02.894Z',
    'latitude': '60.472023',
    'longitude': '8.468946',
    'name': 'Norway',
    'objectid': 'rxSafpWsyKhfkV0HTtb4'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '2', 'infected': '126', 'recovered': '122', 'sick': '2', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '126',
      'recovered': '122',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': '1b818cd9-5257-4f7d-95c0-2416d99f448b',
    'lastUpdated': '2020-03-21T07:54:21.786Z',
    'latitude': '41.097481',
    'longitude': '122.310669',
    'name': 'Liaoning',
    'objectid': 'e7P83iImanpd9r36oXK3'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '5', 'infected': '585', 'recovered': '0', 'sick': '580', 'time': 1584809582622}, {
      'dead': '5',
      'infected': '585',
      'recovered': '0',
      'sick': '580',
      'time': 1584810002408
    }],
    'id': '0651dce3-5837-4697-86cb-3fe4e7c666ca',
    'lastUpdated': '2020-03-21T16:42:03.027Z',
    'latitude': '40.6331',
    'longitude': '-89.3985',
    'name': 'Illinois',
    'objectid': 'PTwQr9ijo0TBBsPH2sdJ'
  }, {
    'country': 'AU',
    'dataHistories': [{'dead': '6', 'infected': '382', 'recovered': '4', 'sick': '372', 'time': 1584809582622}, {
      'dead': '6',
      'infected': '382',
      'recovered': '4',
      'sick': '372',
      'time': 1584810002408
    }],
    'id': '0f655f14-f4b7-4167-aa2d-08fad6231637',
    'lastUpdated': '2020-03-21T16:40:04.025Z',
    'latitude': '-31.253218',
    'longitude': '146.921097',
    'name': 'New South Wales',
    'objectid': '5N16a2OXXRpsEFanw0TC'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '13', 'infected': '484', 'recovered': '463', 'sick': '8', 'time': 1584809582622}, {
      'dead': '13',
      'infected': '484',
      'recovered': '463',
      'sick': '8',
      'time': 1584810002408
    }],
    'id': '1d09afa2-2630-4e00-ad4a-68a67185f7e7',
    'lastUpdated': '2020-03-21T07:54:16.163Z',
    'latitude': '47.121647',
    'longitude': '128.738235',
    'name': 'Heilongjiang',
    'objectid': 'p1aZboN4BtRJe7hPl8cw'
  }, {
    'country': 'BD',
    'dataHistories': [{'dead': '2', 'infected': '24', 'recovered': '3', 'sick': '19', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '24',
      'recovered': '3',
      'sick': '19',
      'time': 1584810002408
    }],
    'id': '13c0260e-169d-4c1b-8dc5-c7478612cfc7',
    'lastUpdated': '2020-03-21T16:43:03.030Z',
    'latitude': '23.685',
    'longitude': '90.3563',
    'name': 'Bangladesh',
    'objectid': 'WpLayPPLIJ7VcHZdQaoM'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '3', 'infected': '346', 'recovered': '0', 'sick': '343', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '346',
      'recovered': '0',
      'sick': '343',
      'time': 1584810002408
    }],
    'id': '1d8459dd-613b-4c6f-95d6-d30b5e644dd6',
    'lastUpdated': '2020-03-21T16:34:06.534Z',
    'latitude': '48.202',
    'longitude': '-2.9326',
    'name': 'Bretagne',
    'objectid': 'URKMlJ7OTNldjpaxFbjE'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '0', 'infected': '631', 'recovered': '631', 'sick': '0', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '631',
      'recovered': '631',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': '26b8f029-77f6-45e1-b113-270087b3fc85',
    'lastUpdated': '2020-03-21T07:53:44.465Z',
    'latitude': '32.93708',
    'longitude': '119.151932',
    'name': 'Jiangsu',
    'objectid': 'uvxN28EpGmRq3K9REtBP'
  }, {
    'country': 'NI',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': '14d2a6a4-4b02-4fa4-a677-bb36c76b30b2',
    'lastUpdated': '2020-03-21T16:43:02.986Z',
    'latitude': '12.136389',
    'longitude': '-86.251389',
    'name': 'Nicaragua',
    'objectid': '9Y5wmCqNCC6ZrenM31uA'
  }, {
    'country': 'LU',
    'dataHistories': [{'dead': '8', 'infected': '670', 'recovered': '6', 'sick': '656', 'time': 1584809582622}, {
      'dead': '8',
      'infected': '670',
      'recovered': '6',
      'sick': '656',
      'time': 1584810002408
    }],
    'id': '2a83eda2-a05f-4175-af25-3fc3890043f0',
    'lastUpdated': '2020-03-21T16:43:02.652Z',
    'latitude': '49.8153',
    'longitude': '6.1296',
    'name': 'Luxembourg',
    'objectid': 'JcFsHSn2WvZ5LJW42ovG'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '3', 'infected': '76', 'recovered': '73', 'sick': '0', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '76',
      'recovered': '73',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': '0a91b1b3-ffdf-47f3-9694-56c2cf362cee',
    'lastUpdated': '2020-03-21T07:53:08.894Z',
    'latitude': '42.524635',
    'longitude': '87.539589',
    'name': 'Xinjiang',
    'objectid': 'lhPjpn6CzqTRDN0RW8uE'
  }, {
    'country': 'LI',
    'dataHistories': [{'dead': '0', 'infected': '37', 'recovered': '0', 'sick': '37', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '37',
      'recovered': '0',
      'sick': '37',
      'time': 1584810002408
    }],
    'id': '1dcff42b-5bb3-4bfd-b805-3fefe515c4d1',
    'lastUpdated': '2020-03-21T16:43:03.060Z',
    'latitude': '47.166',
    'longitude': '9.5554',
    'name': 'Liechtenstein',
    'objectid': 'LTGEU2E9MFkrCcFhZYVk'
  }, {
    'country': 'DK',
    'dataHistories': [{'dead': '13', 'infected': '1326', 'recovered': '1', 'sick': '1312', 'time': 1584809582622}, {
      'dead': '13',
      'infected': '1326',
      'recovered': '1',
      'sick': '1312',
      'time': 1584810002408
    }],
    'id': '1d4c986a-a830-49ee-9285-d3bd65396d6d',
    'lastUpdated': '2020-03-21T16:43:02.656Z',
    'latitude': '55.675758',
    'longitude': '12.56902',
    'name': 'Denmark',
    'objectid': 'Ty1AY3VLPJcRZgdBIERx'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '1', 'infected': '217', 'recovered': '0', 'sick': '216', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '217',
      'recovered': '0',
      'sick': '216',
      'time': 1584810002408
    }],
    'id': '1559ce75-f4e0-4400-97b8-83ffbc032c24',
    'lastUpdated': '2020-03-21T16:42:03.323Z',
    'latitude': '51.9503',
    'longitude': '11.6923',
    'name': 'Sachsen-Anhalt',
    'objectid': 'uxAceZxiizwmo60pyyGn'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '3', 'infected': '127', 'recovered': '0', 'sick': '124', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '127',
      'recovered': '0',
      'sick': '124',
      'time': 1584810002408
    }],
    'id': '21d217a4-58be-4f34-978a-bfe459ba2de9',
    'lastUpdated': '2020-03-21T16:42:02.935Z',
    'latitude': '40.2672',
    'longitude': '-86.1349',
    'name': 'Indiana',
    'objectid': 'MOxDkmQ4wBi1CuAdVxDE'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '4', 'recovered': '0', 'sick': '4', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '4',
      'recovered': '0',
      'sick': '4',
      'time': 1584810002408
    }],
    'id': '2fd87d9f-e9fb-448b-852f-ab415f8a1364',
    'lastUpdated': '2020-03-21T16:34:03.487Z',
    'latitude': '33.7782',
    'longitude': '76.5762',
    'name': 'Jammu and Kashmir',
    'objectid': 'v5wfBhxjYTpTMaKko6AW'
  }, {
    'country': 'MD',
    'dataHistories': [{'dead': '1', 'infected': '80', 'recovered': '1', 'sick': '78', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '80',
      'recovered': '1',
      'sick': '78',
      'time': 1584810002408
    }],
    'id': '2951ef7c-9a56-4d77-92f6-66e20426c53e',
    'lastUpdated': '2020-03-21T16:43:02.741Z',
    'latitude': '47.4116',
    'longitude': '28.3699',
    'name': 'Moldova',
    'objectid': '1qTPB8X3tyLyIdsb5TN3'
  }, {
    'country': 'VA',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': '2e39d7aa-9767-47f0-8cb9-35e3848d46d1',
    'lastUpdated': '2020-03-21T16:43:03.049Z',
    'latitude': '41.9029',
    'longitude': '12.4534',
    'name': 'Vatican City',
    'objectid': 'mF7rVMdVnazAuw8G22xs'
  }, {
    'country': 'AU',
    'dataHistories': [{'dead': '0', 'infected': '178', 'recovered': '8', 'sick': '170', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '178',
      'recovered': '8',
      'sick': '170',
      'time': 1584810002408
    }],
    'id': '0b499aad-a155-44a2-ba51-1799f363d9b1',
    'lastUpdated': '2020-03-21T16:40:04.136Z',
    'latitude': '-37.009609',
    'longitude': '143.94853',
    'name': 'Victoria',
    'objectid': 'Q18mrGvFWTLX2BU9SqhQ'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '1', 'infected': '1236', 'recovered': '1219', 'sick': '16', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '1236',
      'recovered': '1219',
      'sick': '16',
      'time': 1584810002408
    }],
    'id': '24b13774-6e57-4cd5-bd77-53fbb7fd9501',
    'lastUpdated': '2020-03-21T07:54:56.739Z',
    'latitude': '29.159849',
    'longitude': '120.326447',
    'name': 'Zhejiang',
    'objectid': 'rgBVJ4hPofqjjchnroiY'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '1', 'infected': '650', 'recovered': '2', 'sick': '647', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '650',
      'recovered': '2',
      'sick': '647',
      'time': 1584810002408
    }],
    'id': '2dac6b97-33f2-4c91-8a02-a55b38dbaed4',
    'lastUpdated': '2020-03-21T16:42:03.426Z',
    'latitude': '51.1045',
    'longitude': '13.2017',
    'name': 'Sachsen',
    'objectid': 'fGqVm2khm3IBRs709S1f'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '8', 'recovered': '0', 'sick': '8', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '8',
      'recovered': '0',
      'sick': '8',
      'time': 1584810002408
    }],
    'id': '228345b3-9cf8-46e6-8fe0-2a5841edcb8f',
    'lastUpdated': '2020-03-21T16:42:03.200Z',
    'latitude': '39',
    'longitude': '-80.5',
    'name': 'West Virginia',
    'objectid': 'qrYN2o4c4gAK3ffF5JIw'
  }, {
    'country': 'CA',
    'dataHistories': [{'dead': '0', 'infected': '11', 'recovered': '0', 'sick': '11', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '11',
      'recovered': '0',
      'sick': '11',
      'time': 1584810002408
    }],
    'id': '26b7e0de-8170-4f98-8d64-12380e40f146',
    'lastUpdated': '2020-03-21T16:42:03.010Z',
    'latitude': '46.5653',
    'longitude': '-66.4619',
    'name': 'New Brunswick',
    'objectid': 'z1Vx0y33oMGoeJSuS8Ui'
  }, {
    'country': 'GN',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': '329f311c-0c14-4103-b80b-6426339a5e26',
    'lastUpdated': '2020-03-21T16:43:02.965Z',
    'latitude': '9.9456',
    'longitude': '-9.6966',
    'name': 'Guinea',
    'objectid': 'LU2QWt5ao8IJa8evNYVV'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '3', 'infected': '248', 'recovered': '239', 'sick': '6', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '248',
      'recovered': '239',
      'sick': '6',
      'time': 1584810002408
    }],
    'id': '2bb4749d-9448-4b0c-aa6c-23f5bb1d7fdf',
    'lastUpdated': '2020-03-21T07:53:38.117Z',
    'latitude': '35.64249',
    'longitude': '108.472214',
    'name': 'Shaanxi',
    'objectid': '0x2HLhr5z5xAtEdO4iZm'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '1', 'infected': '79', 'recovered': '0', 'sick': '78', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '79',
      'recovered': '0',
      'sick': '78',
      'time': 1584810002408
    }],
    'id': '355fee3c-7aa1-45c5-8395-ae2dd80db1ce',
    'lastUpdated': '2020-03-21T16:42:02.847Z',
    'latitude': '34.048927',
    'longitude': '-111.093735',
    'name': 'Arizona',
    'objectid': 'BTEESCuD2ZbS1afunR2A'
  }, {
    'country': 'EG',
    'dataHistories': [{'dead': '8', 'infected': '285', 'recovered': '42', 'sick': '235', 'time': 1584809582622}, {
      'dead': '8',
      'infected': '285',
      'recovered': '42',
      'sick': '235',
      'time': 1584810002408
    }],
    'id': '1a4536bd-b13a-4e3a-8bf5-1c1f94dea74d',
    'lastUpdated': '2020-03-21T16:43:02.708Z',
    'latitude': '26.820553',
    'longitude': '30.802498',
    'name': 'Egypt',
    'objectid': 'v8JcH4FHH7BDpJlNNHjv'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '1', 'infected': '14', 'recovered': '0', 'sick': '13', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '14',
      'recovered': '0',
      'sick': '13',
      'time': 1584810002408
    }],
    'id': '2700c596-dbb2-45d5-a6db-ed5e8bdf2a4d',
    'lastUpdated': '2020-03-21T16:42:02.928Z',
    'latitude': '43.9695',
    'longitude': '-99.9018',
    'name': 'South Dakota',
    'objectid': 'gYDsNgvuvtbg8t77w6FS'
  }, {
    'country': 'AU',
    'dataHistories': [{'dead': '0', 'infected': '184', 'recovered': '8', 'sick': '176', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '184',
      'recovered': '8',
      'sick': '176',
      'time': 1584810002408
    }],
    'id': '3030bb96-7895-4449-bae9-082c1d4649c1',
    'lastUpdated': '2020-03-21T16:40:04.133Z',
    'latitude': '-20.917574',
    'longitude': '142.702789',
    'name': 'Queensland',
    'objectid': 'oxz2l1rJipCsfMfy8Mmk'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '36', 'recovered': '0', 'sick': '36', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '36',
      'recovered': '0',
      'sick': '36',
      'time': 1584810002408
    }],
    'id': '28627f63-a683-4f0c-838d-99450510dae6',
    'lastUpdated': '2020-03-21T16:42:03.233Z',
    'latitude': '44.0682',
    'longitude': '-114.742',
    'name': 'Idaho',
    'objectid': 'l7fHSKOmcaRX3tq9FCT6'
  }, {
    'country': 'BA',
    'dataHistories': [{'dead': '1', 'infected': '93', 'recovered': '2', 'sick': '90', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '93',
      'recovered': '2',
      'sick': '90',
      'time': 1584810002408
    }],
    'id': '289e9935-4c4e-4ba6-8dd8-3ff21f352332',
    'lastUpdated': '2020-03-21T16:43:02.643Z',
    'latitude': '44.696652',
    'longitude': '17.824332',
    'name': 'Bosnia and Herzegovina',
    'objectid': 'N7c13sCQF0G789XAVazJ'
  }, {
    'country': 'CW',
    'dataHistories': [{'dead': '1', 'infected': '3', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '3',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': '38eb9509-b9d6-449c-b4b4-07b2d58c4782',
    'lastUpdated': '2020-03-21T16:43:02.995Z',
    'latitude': '12.1696',
    'longitude': '-68.99',
    'name': 'Curaçao',
    'objectid': 'z0KDu61I2qPILneW2Lih'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '11', 'infected': '890', 'recovered': '0', 'sick': '879', 'time': 1584809582622}, {
      'dead': '11',
      'infected': '890',
      'recovered': '0',
      'sick': '879',
      'time': 1584810002408
    }],
    'id': '2c25774e-6671-4ae4-9fcf-037a42586014',
    'lastUpdated': '2020-03-21T16:42:03.025Z',
    'latitude': '39.561889',
    'longitude': '-74.672169',
    'name': 'New Jersey',
    'objectid': 'bYp4RRHv19M7lYtSzQeV'
  }, {
    'country': 'HU',
    'dataHistories': [{'dead': '4', 'infected': '103', 'recovered': '7', 'sick': '92', 'time': 1584809582622}, {
      'dead': '4',
      'infected': '103',
      'recovered': '7',
      'sick': '92',
      'time': 1584810002408
    }],
    'id': '3ae8603b-fad7-4539-9b2c-42c74c85801b',
    'lastUpdated': '2020-03-21T16:43:02.680Z',
    'latitude': '47.4979',
    'longitude': '19.0402',
    'name': 'Hungary',
    'objectid': '7rYC2iFB50c55Ihgbs4Q'
  }, {
    'country': 'IT',
    'dataHistories': [{'dead': '4032', 'infected': '47021', 'recovered': '5129', 'sick': '37860', 'time': 1584809582622}, {
      'dead': '4032',
      'infected': '47021',
      'recovered': '5129',
      'sick': '37860',
      'time': 1584810002408
    }],
    'id': '20c98033-63b9-47e1-bce0-0817f02a8838',
    'lastUpdated': '2020-03-21T16:43:02.358Z',
    'latitude': '41.871941',
    'longitude': '12.56738',
    'name': 'Italy',
    'objectid': 'XdekMZcw1lJK2MWpBlNK'
  }, {
    'country': 'PH',
    'dataHistories': [{'dead': '19', 'infected': '307', 'recovered': '13', 'sick': '275', 'time': 1584809582622}, {
      'dead': '19',
      'infected': '307',
      'recovered': '13',
      'sick': '275',
      'time': 1584810002408
    }],
    'id': '2a04bff4-24fd-40a2-8e51-d6b5b76dc590',
    'lastUpdated': '2020-03-21T16:43:02.667Z',
    'latitude': '12.879721',
    'longitude': '121.774017',
    'name': 'Philippines',
    'objectid': '5pwmh7aSdGRKqRbnuyc0'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '2', 'infected': '176', 'recovered': '172', 'sick': '2', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '176',
      'recovered': '172',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': '3937f48d-5c40-43bb-83fb-59a4afedccf1',
    'lastUpdated': '2020-03-21T07:54:49.045Z',
    'latitude': '25.181129',
    'longitude': '101.864143',
    'name': 'Yunnan',
    'objectid': 'VIf8T8PD3ZzlzAm5eBCX'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '2', 'infected': '1166', 'recovered': '5', 'sick': '1159', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '1166',
      'recovered': '5',
      'sick': '1159',
      'time': 1584810002408
    }],
    'id': '289c290e-3cec-4c83-a93a-c83afbfc5f88',
    'lastUpdated': '2020-03-21T16:42:03.225Z',
    'latitude': '50.6521',
    'longitude': '9.1624',
    'name': 'Hessen',
    'objectid': 'Nk5vPgUIXsWVfbWZf15O'
  }, {
    'country': 'BG',
    'dataHistories': [{'dead': '3', 'infected': '163', 'recovered': '3', 'sick': '157', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '163',
      'recovered': '3',
      'sick': '157',
      'time': 1584810002408
    }],
    'id': '336fda1e-611d-4b2c-8b44-ca6cd6e2fc20',
    'lastUpdated': '2020-03-21T16:43:02.653Z',
    'latitude': '42.7339',
    'longitude': '25.4858',
    'name': 'Bulgaria',
    'objectid': 'JzZ8sbqzjutThVjkPKPL'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '4', 'infected': '363', 'recovered': '0', 'sick': '359', 'time': 1584809582622}, {
      'dead': '4',
      'infected': '363',
      'recovered': '0',
      'sick': '359',
      'time': 1584810002408
    }],
    'id': '3d808851-097d-4d8b-87df-c2b67a8f9472',
    'lastUpdated': '2020-03-21T16:42:02.869Z',
    'latitude': '39.318928',
    'longitude': '-105.461392',
    'name': 'Colorado',
    'objectid': 'Th4dlpXXmSDgi1OHs36P'
  }, {
    'country': 'IE',
    'dataHistories': [{'dead': '3', 'infected': '683', 'recovered': '5', 'sick': '675', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '683',
      'recovered': '5',
      'sick': '675',
      'time': 1584810002408
    }],
    'id': '3b35bd4b-ab73-45fc-9461-0008d08bdd03',
    'lastUpdated': '2020-03-21T16:43:02.712Z',
    'latitude': '53.3498',
    'longitude': '-6.2603',
    'name': 'Ireland',
    'objectid': 'jpVXEDCyfyq26gPoCtHL'
  }, {
    'country': 'EE',
    'dataHistories': [{'dead': '0', 'infected': '306', 'recovered': '2', 'sick': '304', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '306',
      'recovered': '2',
      'sick': '304',
      'time': 1584810002408
    }],
    'id': '3bb1bfe0-a42c-4fa6-b737-e80d3388b791',
    'lastUpdated': '2020-03-21T16:43:02.678Z',
    'latitude': '58.595272',
    'longitude': '25.013607',
    'name': 'Estonia',
    'objectid': 'QR9go2hQKXjty7JHUYe4'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '2', 'infected': '1062', 'recovered': '1', 'sick': '1059', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '1062',
      'recovered': '1',
      'sick': '1059',
      'time': 1584810002408
    }],
    'id': '2c6fff8e-b14f-45bd-9dca-510f748152fe',
    'lastUpdated': '2020-03-21T16:42:03.430Z',
    'latitude': '50.1183',
    'longitude': '7.309',
    'name': 'Rheinland-Pfalz',
    'objectid': 'jKn2pIFlIBScjb47GjRX'
  }, {
    'country': 'AE',
    'dataHistories': [{'dead': '2', 'infected': '153', 'recovered': '38', 'sick': '113', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '153',
      'recovered': '38',
      'sick': '113',
      'time': 1584810002408
    }],
    'id': '2a18bd8a-b153-4f7a-97aa-6a51253aa15c',
    'lastUpdated': '2020-03-21T16:43:02.751Z',
    'latitude': '23.424076',
    'longitude': '53.847816',
    'name': 'United Arab Emirates',
    'objectid': 'GHzBIsHy2GiBc5JV2HMs'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '7', 'infected': '826', 'recovered': '1', 'sick': '818', 'time': 1584809582622}, {
      'dead': '7',
      'infected': '826',
      'recovered': '1',
      'sick': '818',
      'time': 1584810002408
    }],
    'id': '3de8ed31-1bae-446a-bdaf-25fd9cda2858',
    'lastUpdated': '2020-03-21T16:34:06.622Z',
    'latitude': '43.9352',
    'longitude': '6.0679',
    'name': 'Provence-Alpes-Côte d’Azur',
    'objectid': 'qyX9xXEuKg3co8yKe3Fl'
  }, {
    'country': 'PT',
    'dataHistories': [{'dead': '12', 'infected': '1280', 'recovered': '5', 'sick': '1263', 'time': 1584809582622}, {
      'dead': '12',
      'infected': '1280',
      'recovered': '5',
      'sick': '1263',
      'time': 1584810002408
    }],
    'id': '32b3a9ad-d315-4327-bb7b-cab2587ba70a',
    'lastUpdated': '2020-03-21T16:43:02.662Z',
    'latitude': '41.065877',
    'longitude': '-7.920053',
    'name': 'Portugal',
    'objectid': '4rQLxUCMmQLpbi6E9tbH'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '0', 'infected': '15', 'recovered': '5', 'sick': '10', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '15',
      'recovered': '5',
      'sick': '10',
      'time': 1584810002408
    }],
    'id': '3afa5cd4-13dc-4f65-a561-c0bcfd73c425',
    'lastUpdated': '2020-03-21T16:34:06.617Z',
    'latitude': '4.749531',
    'longitude': '-53.112909',
    'name': 'Guyane',
    'objectid': 'cc7s6hYGQ2MovBBBgkKb'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '1', 'infected': '49', 'recovered': '0', 'sick': '48', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '49',
      'recovered': '0',
      'sick': '48',
      'time': 1584810002408
    }],
    'id': '3f0334dd-b1d8-4e41-bec5-63555b8ed9f6',
    'lastUpdated': '2020-03-21T16:42:02.970Z',
    'latitude': '35.87189',
    'longitude': '-97.145514',
    'name': 'Oklahoma',
    'objectid': 'GpF8ULuKOQiFDCUHN44h'
  }, {
    'country': 'IR',
    'dataHistories': [{'dead': '1556', 'infected': '20610', 'recovered': '7635', 'sick': '11419', 'time': 1584809582622}, {
      'dead': '1556',
      'infected': '20610',
      'recovered': '7635',
      'sick': '11419',
      'time': 1584810002408
    }],
    'id': '3fa1c2ee-fa45-4b4c-88c1-3766d26a44c6',
    'lastUpdated': '2020-03-21T16:43:02.895Z',
    'latitude': '32.42791',
    'longitude': '53.688046',
    'name': 'Iran',
    'objectid': 'vkkXVaqUswO5JsMZx0mX'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '24', 'infected': '1249', 'recovered': '0', 'sick': '1225', 'time': 1584809582622}, {
      'dead': '24',
      'infected': '1249',
      'recovered': '0',
      'sick': '1225',
      'time': 1584810002408
    }],
    'id': '3f1de67c-2b60-4774-9269-b1b5f692fd68',
    'lastUpdated': '2020-03-21T16:42:03.213Z',
    'latitude': '36.621981',
    'longitude': '-119.339046',
    'name': 'California',
    'objectid': 'Gh46r6vuaY7fbGt3IboN'
  }, {
    'country': 'CL',
    'dataHistories': [{'dead': '0', 'infected': '537', 'recovered': '8', 'sick': '529', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '537',
      'recovered': '8',
      'sick': '529',
      'time': 1584810002408
    }],
    'id': '2dfb3dd9-72a3-4f8d-bfe2-82412f10652c',
    'lastUpdated': '2020-03-21T16:43:02.744Z',
    'latitude': '-33.4489',
    'longitude': '-70.6693',
    'name': 'Chile',
    'objectid': 'mSACWVbCy5QE7ciLA93J'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '1', 'infected': '80', 'recovered': '0', 'sick': '79', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '80',
      'recovered': '0',
      'sick': '79',
      'time': 1584810002408
    }],
    'id': '31322dab-be85-43e3-940c-e834ce7ea3be',
    'lastUpdated': '2020-03-21T16:42:02.926Z',
    'latitude': '33.51822',
    'longitude': '-89.582775',
    'name': 'Mississippi',
    'objectid': 'OYa0jFzdbAgo8zUsRv6q'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '2', 'infected': '125', 'recovered': '0', 'sick': '123', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '125',
      'recovered': '0',
      'sick': '123',
      'time': 1584810002408
    }],
    'id': '475b753d-0275-4976-af13-f7ac739793dc',
    'lastUpdated': '2020-03-21T16:42:03.098Z',
    'latitude': '37.4316',
    'longitude': '-78.6569',
    'name': 'Virginia',
    'objectid': 'afeZTVC1J1SMMNFxkrcc'
  }, {
    'country': 'KR',
    'dataHistories': [{'dead': '102', 'infected': '8799', 'recovered': '2612', 'sick': '6085', 'time': 1584809582622}, {
      'dead': '102',
      'infected': '8799',
      'recovered': '2612',
      'sick': '6085',
      'time': 1584810002408
    }],
    'id': '35a48a74-ce49-4304-9f14-e84e31645021',
    'lastUpdated': '2020-03-21T16:43:02.890Z',
    'latitude': '37.568291',
    'longitude': '126.99778',
    'name': 'South Korea',
    'objectid': 'Yw9uBekNlefXBcOCNMfP'
  }, {
    'country': 'UZ',
    'dataHistories': [{'dead': '0', 'infected': '41', 'recovered': '0', 'sick': '41', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '41',
      'recovered': '0',
      'sick': '41',
      'time': 1584810002408
    }],
    'id': '3ceb2a0b-a835-4282-963f-70cd3e270227',
    'lastUpdated': '2020-03-21T16:43:03.062Z',
    'latitude': '41.3775',
    'longitude': '64.5853',
    'name': 'Uzbekistan',
    'objectid': 'HRTA10dtrruDEwjJEGMp'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '2', 'infected': '190', 'recovered': '0', 'sick': '188', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '190',
      'recovered': '0',
      'sick': '188',
      'time': 1584810002408
    }],
    'id': '44c2624b-a7ac-48fe-b7d6-adf73e2783b1',
    'lastUpdated': '2020-03-21T16:42:03.128Z',
    'latitude': '39.509109',
    'longitude': '-76.98432',
    'name': 'Maryland',
    'objectid': 'BF51mWl51fgEcyBpCSzb'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '112', 'recovered': '0', 'sick': '112', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '112',
      'recovered': '0',
      'sick': '112',
      'time': 1584810002408
    }],
    'id': '415f9ab8-69b2-4f87-a876-b1f1001f33a2',
    'lastUpdated': '2020-03-21T16:42:02.985Z',
    'latitude': '39.147061',
    'longitude': '-111.596466',
    'name': 'Utah',
    'objectid': 'tSmr8vNsiDhhpXMSBsms'
  }, {
    'country': 'PG',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': '3ff69450-fdfe-4528-8dd1-0fba2f9b6543',
    'lastUpdated': '2020-03-21T16:43:03.023Z',
    'latitude': '-6.315',
    'longitude': '143.9555',
    'name': 'Papua New Guinea',
    'objectid': 'QlZrE4nosm5WfdA2aCDg'
  }, {
    'country': 'RU',
    'dataHistories': [{'dead': '1', 'infected': '306', 'recovered': '16', 'sick': '289', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '306',
      'recovered': '16',
      'sick': '289',
      'time': 1584810002408
    }],
    'id': '353ea4ab-dbcb-4d2d-830a-2881af163bd4',
    'lastUpdated': '2020-03-21T16:43:02.637Z',
    'latitude': '61.52401',
    'longitude': '105.318756',
    'name': 'Russia',
    'objectid': 'KwOuGBKSMRlmwftxAvLX'
  }, {
    'country': 'NZ',
    'dataHistories': [{'dead': '0', 'infected': '52', 'recovered': '0', 'sick': '52', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '52',
      'recovered': '0',
      'sick': '52',
      'time': 1584810002408
    }],
    'id': '338a56b6-06f5-4bbe-97b6-0bf680a87825',
    'lastUpdated': '2020-03-21T16:43:02.711Z',
    'latitude': '-42.8285',
    'longitude': '172.488081',
    'name': 'New Zealand',
    'objectid': 'IvVhpOoGpH6JVkGyUhXN'
  }, {
    'country': 'LB',
    'dataHistories': [{'dead': '4', 'infected': '206', 'recovered': '8', 'sick': '194', 'time': 1584809582622}, {
      'dead': '4',
      'infected': '206',
      'recovered': '8',
      'sick': '194',
      'time': 1584810002408
    }],
    'id': '48ffff9d-36ab-4441-84a6-bdf5c71a644b',
    'lastUpdated': '2020-03-21T16:43:02.647Z',
    'latitude': '34.08267',
    'longitude': '35.918113',
    'name': 'Lebanon',
    'objectid': 'xFgM48q8JxVPfvQLQDNb'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '21', 'recovered': '1', 'sick': '20', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '21',
      'recovered': '1',
      'sick': '20',
      'time': 1584810002408
    }],
    'id': '36e6d8cc-e90c-4424-b8f2-3655795979aa',
    'lastUpdated': '2020-03-21T16:34:03.524Z',
    'latitude': '18.1124',
    'longitude': '79.0193',
    'name': 'Telangana',
    'objectid': 'FyC551oNwmENxbr9Yght'
  }, {
    'country': 'KE',
    'dataHistories': [{'dead': '0', 'infected': '7', 'recovered': '0', 'sick': '7', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '7',
      'recovered': '0',
      'sick': '7',
      'time': 1584810002408
    }],
    'id': '3ed56197-5383-4eac-8e12-2832b59b9def',
    'lastUpdated': '2020-03-21T16:43:02.983Z',
    'latitude': '-0.0236',
    'longitude': '37.9062',
    'name': 'Kenya',
    'objectid': 'bVHiTolbUJGHIeVht3eG'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': '53d20d22-2699-48d7-9005-7db8f1236306',
    'lastUpdated': '2020-03-21T16:34:03.509Z',
    'latitude': '20.9517',
    'longitude': '85.0985',
    'name': 'Odisha',
    'objectid': '0VG7S6aaK4eSo59fL9JO'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '37', 'recovered': '0', 'sick': '37', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '37',
      'recovered': '0',
      'sick': '37',
      'time': 1584810002408
    }],
    'id': '41d0b89a-6a6a-47f6-8c5b-08bd0d85771d',
    'lastUpdated': '2020-03-21T16:42:03.188Z',
    'latitude': '21.287261',
    'longitude': '-157.838954',
    'name': 'Hawaii',
    'objectid': 'wi47s9vKxiMqxfgurj3B'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '20', 'recovered': '0', 'sick': '20', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '20',
      'recovered': '0',
      'sick': '20',
      'time': 1584810002408
    }],
    'id': '425000aa-63a2-4f62-a021-1e0de14799fa',
    'lastUpdated': '2020-03-21T16:42:02.953Z',
    'latitude': '47.012918',
    'longitude': '-109.128641',
    'name': 'Montana',
    'objectid': 'AcULcZBozObOhwuRKMjJ'
  }, {
    'country': 'CA',
    'dataHistories': [{'dead': '0', 'infected': '4', 'recovered': '0', 'sick': '4', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '4',
      'recovered': '0',
      'sick': '4',
      'time': 1584810002408
    }],
    'id': '38111463-5eb0-42f5-a6d5-b3d093954ffc',
    'lastUpdated': '2020-03-21T16:42:03.245Z',
    'latitude': '53.1355',
    'longitude': '-57.6604',
    'name': 'Newfoundland and Labrador',
    'objectid': '1DOMOmCWDtva46OVSZLv'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '3', 'infected': '66', 'recovered': '0', 'sick': '63', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '66',
      'recovered': '0',
      'sick': '63',
      'time': 1584810002408
    }],
    'id': '33b90083-8b21-42a2-bcec-da8f116e67c7',
    'lastUpdated': '2020-03-21T16:42:03.035Z',
    'latitude': '37.9643',
    'longitude': '-91.8318',
    'name': 'Missouri',
    'objectid': 'aPubGfQ8ToSEuKJldKRT'
  }, {
    'country': 'RS',
    'dataHistories': [{'dead': '1', 'infected': '149', 'recovered': '2', 'sick': '146', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '149',
      'recovered': '2',
      'sick': '146',
      'time': 1584810002408
    }],
    'id': '4d92b8a4-9a03-48d3-8053-cd34961b1a72',
    'lastUpdated': '2020-03-21T16:43:02.684Z',
    'latitude': '44.0165',
    'longitude': '21.0059',
    'name': 'Serbia',
    'objectid': 'zyxFwuiyCJHhRyNEg60C'
  }, {
    'country': 'CH',
    'dataHistories': [{'dead': '64', 'infected': '6192', 'recovered': '15', 'sick': '6113', 'time': 1584809582622}, {
      'dead': '64',
      'infected': '6192',
      'recovered': '15',
      'sick': '6113',
      'time': 1584810002408
    }],
    'id': '3bd588af-d4ef-45c1-8bd5-0c354ff18e78',
    'lastUpdated': '2020-03-21T16:43:02.690Z',
    'latitude': '46.818188',
    'longitude': '8.227512',
    'name': 'Switzerland',
    'objectid': 'SGe9sCPayMqh6RsGFaBA'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '0', 'infected': '18', 'recovered': '18', 'sick': '0', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '18',
      'recovered': '18',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': '47a6ae32-952c-476a-a777-c36a8bd42c89',
    'lastUpdated': '2020-03-21T07:53:55.177Z',
    'latitude': '35.801933',
    'longitude': '96.779286',
    'name': 'Qinghai',
    'objectid': '1Fap7rZu9SIRqf5TG9Dg'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '7', 'infected': '1101', 'recovered': '27', 'sick': '1067', 'time': 1584809582622}, {
      'dead': '7',
      'infected': '1101',
      'recovered': '27',
      'sick': '1067',
      'time': 1584810002408
    }],
    'id': '5bfc7c08-86c0-434a-98ff-b99ad0f4d91e',
    'lastUpdated': '2020-03-21T16:34:06.429Z',
    'latitude': '45.4471',
    'longitude': '4.3853',
    'name': 'Auvergne-Rhône-Alpes',
    'objectid': 'TT0MKODSjrxHvG19xZCa'
  }, {
    'country': 'KH',
    'dataHistories': [{'dead': '0', 'infected': '53', 'recovered': '2', 'sick': '51', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '53',
      'recovered': '2',
      'sick': '51',
      'time': 1584810002408
    }],
    'id': '43e14ed4-36b1-4634-af07-17ac8290f1fc',
    'lastUpdated': '2020-03-21T16:43:02.702Z',
    'latitude': '12.565679',
    'longitude': '104.990967',
    'name': 'Cambodia',
    'objectid': 'SioMALgUbo7peXmbco2f'
  }, {
    'country': 'IL',
    'dataHistories': [{'dead': '1', 'infected': '883', 'recovered': '36', 'sick': '846', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '883',
      'recovered': '36',
      'sick': '846',
      'time': 1584810002408
    }],
    'id': '440ae1ce-3596-4262-b80d-3d684bfb1db0',
    'lastUpdated': '2020-03-21T16:43:02.888Z',
    'latitude': '31.046051',
    'longitude': '34.851612',
    'name': 'Israel',
    'objectid': 'cX891t0ONLNFj0MYq6La'
  }, {
    'country': 'VC',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': '3f65869f-943f-4dd3-b839-182b4b864301',
    'lastUpdated': '2020-03-21T16:43:03.009Z',
    'latitude': '12.9843',
    'longitude': '-61.2872',
    'name': 'St. Vincent Grenadines',
    'objectid': '8ZTySQROQejkDAad0qxQ'
  }, {
    'country': 'GH',
    'dataHistories': [{'dead': '0', 'infected': '19', 'recovered': '0', 'sick': '19', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '19',
      'recovered': '0',
      'sick': '19',
      'time': 1584810002408
    }],
    'id': '38dbc247-69a5-47d6-aa3a-faeca221c9d7',
    'lastUpdated': '2020-03-21T16:43:03.042Z',
    'latitude': '7.9465',
    'longitude': '-1.0232',
    'name': 'Ghana',
    'objectid': 'SG9VWLOV3x2JsTkXmVSz'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '11', 'infected': '563', 'recovered': '0', 'sick': '552', 'time': 1584809582622}, {
      'dead': '11',
      'infected': '563',
      'recovered': '0',
      'sick': '552',
      'time': 1584810002408
    }],
    'id': '4ffb4df4-3585-4b0b-96da-24234cabe3f4',
    'lastUpdated': '2020-03-21T16:42:03.171Z',
    'latitude': '27.716933',
    'longitude': '-81.555239',
    'name': 'Florida',
    'objectid': 'fNganaGVPifA4QahEQPS'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '16', 'infected': '585', 'recovered': '0', 'sick': '569', 'time': 1584809582622}, {
      'dead': '16',
      'infected': '585',
      'recovered': '0',
      'sick': '569',
      'time': 1584810002408
    }],
    'id': '434325f9-6447-4747-98de-4506b17e8655',
    'lastUpdated': '2020-03-21T16:42:02.914Z',
    'latitude': '30.9843',
    'longitude': '-91.9623',
    'name': 'Louisiana',
    'objectid': 'qzuktS0qQVU4PEookjss'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '3', 'infected': '380', 'recovered': '327', 'sick': '50', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '380',
      'recovered': '327',
      'sick': '50',
      'time': 1584810002408
    }],
    'id': '482d5703-8dad-45c0-b542-64620a25b5f5',
    'lastUpdated': '2020-03-21T07:55:08.860Z',
    'latitude': '31.230391',
    'longitude': '121.473701',
    'name': 'Shanghai',
    'objectid': 'e9pQqQa7CEblCYoDtfKo'
  }, {
    'country': 'BN',
    'dataHistories': [{'dead': '0', 'infected': '83', 'recovered': '1', 'sick': '82', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '83',
      'recovered': '1',
      'sick': '82',
      'time': 1584810002408
    }],
    'id': '5ce4a3da-1817-4304-97a4-118ef08aa5a9',
    'lastUpdated': '2020-03-21T16:43:02.747Z',
    'latitude': '4.506106',
    'longitude': '114.650692',
    'name': 'Brunei',
    'objectid': 'TQZmzsLhJqjtCSExAkCP'
  }, {
    'country': 'CF',
    'dataHistories': [{'dead': '0', 'infected': '3', 'recovered': '0', 'sick': '3', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '3',
      'recovered': '0',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': '48ad0c5f-b96e-4cfa-95c9-2b3b2bef6e33',
    'lastUpdated': '2020-03-21T16:43:03.052Z',
    'latitude': '6.6111',
    'longitude': '20.9394',
    'name': 'CAR',
    'objectid': 'adcBUeAYp6ey0ZXCzKNs'
  }, {
    'country': 'GM',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': '442d2dd2-bff3-4dc6-9eb4-ff3cd7402834',
    'lastUpdated': '2020-03-21T16:43:03.016Z',
    'latitude': '13.443182',
    'longitude': '-15.3101387',
    'name': 'Gambia',
    'objectid': 'Wk811YwpQxsOCfz8As86'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '11', 'infected': '3818', 'recovered': '5', 'sick': '3802', 'time': 1584809582622}, {
      'dead': '11',
      'infected': '3818',
      'recovered': '5',
      'sick': '3802',
      'time': 1584810002408
    }],
    'id': '44ffc699-4e11-476f-9ae1-2e199572fa8c',
    'lastUpdated': '2020-03-21T16:34:06.519Z',
    'latitude': '48.8499',
    'longitude': '2.637',
    'name': 'Ile-de-France',
    'objectid': 'vSwFXxTSLgzsG25zOJUy'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '0', 'infected': '142', 'recovered': '3', 'sick': '139', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '142',
      'recovered': '3',
      'sick': '139',
      'time': 1584810002408
    }],
    'id': '3abe7c49-6d9a-4706-ada5-f3fdedfc034b',
    'lastUpdated': '2020-03-21T16:42:03.134Z',
    'latitude': '53.0793',
    'longitude': '8.8017',
    'name': 'Bremen',
    'objectid': 'y0d3PQgXJXdKsxweTIWv'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '43', 'recovered': '0', 'sick': '43', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '43',
      'recovered': '0',
      'sick': '43',
      'time': 1584810002408
    }],
    'id': '60df910c-b898-4782-b1d3-ad64fbad1c08',
    'lastUpdated': '2020-03-21T16:42:02.973Z',
    'latitude': '34.138916',
    'longitude': '-105.576255',
    'name': 'New Mexico',
    'objectid': 'HSSFomRju0doHhWgW8On'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '1', 'sick': '0', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '1',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': '507efcdc-1266-444e-96ab-47e5287f4356',
    'lastUpdated': '2020-03-21T07:52:59.008Z',
    'latitude': '30.15336',
    'longitude': '88.787865',
    'name': 'Tibet',
    'objectid': '25qIBtsW2nfQj3pwBKg9'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '1', 'infected': '93', 'recovered': '92', 'sick': '0', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '93',
      'recovered': '92',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': '48673fbb-73e9-4cf2-887c-b6452a6a0c7b',
    'lastUpdated': '2020-03-21T07:54:00.025Z',
    'latitude': '43.851921',
    'longitude': '126.548103',
    'name': 'Jilin',
    'objectid': '2jxHvSsxdnom0nPNvOT8'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '45', 'recovered': '0', 'sick': '45', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '45',
      'recovered': '0',
      'sick': '45',
      'time': 1584810002408
    }],
    'id': '64e2aeb9-8a26-4e01-92bd-e807c8caa055',
    'lastUpdated': '2020-03-21T16:42:02.991Z',
    'latitude': '41.878',
    'longitude': '-93.0977',
    'name': 'Iowa',
    'objectid': 'RX0KDu1AFrlCsrRso0nb'
  }, {
    'country': 'GE',
    'dataHistories': [{'dead': '0', 'infected': '49', 'recovered': '1', 'sick': '48', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '49',
      'recovered': '1',
      'sick': '48',
      'time': 1584810002408
    }],
    'id': '4b2f5504-36fa-4844-ab2e-dab9f1df1260',
    'lastUpdated': '2020-03-21T16:43:02.725Z',
    'latitude': '42.3154',
    'longitude': '43.3569',
    'name': 'Georgia',
    'objectid': 'sjW9OwjFqrOvjVHRXWoR'
  }, {
    'country': 'PE',
    'dataHistories': [{'dead': '4', 'infected': '263', 'recovered': '1', 'sick': '258', 'time': 1584809582622}, {
      'dead': '4',
      'infected': '263',
      'recovered': '1',
      'sick': '258',
      'time': 1584810002408
    }],
    'id': '4b4cacb5-7f53-4eab-9407-68a6b4bc0beb',
    'lastUpdated': '2020-03-21T16:43:02.884Z',
    'latitude': '-10.33755',
    'longitude': '-75.630295',
    'name': 'Peru',
    'objectid': 'sLL1jETcJYjT6g5bfcEG'
  }, {
    'country': 'LR',
    'dataHistories': [{'dead': '0', 'infected': '3', 'recovered': '0', 'sick': '3', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '3',
      'recovered': '0',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': '4abdd681-e32a-4083-9fe8-3c4c1e60a61f',
    'lastUpdated': '2020-03-21T16:43:02.970Z',
    'latitude': '6.4281',
    'longitude': '-9.4295',
    'name': 'Liberia',
    'objectid': 'O4g88K49HKEZLFXm5gxb'
  }, {
    'country': 'ME',
    'dataHistories': [{'dead': '0', 'infected': '14', 'recovered': '0', 'sick': '14', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '14',
      'recovered': '0',
      'sick': '14',
      'time': 1584810002408
    }],
    'id': '3d402436-ebf5-4b3e-91ae-ae717b9d05aa',
    'lastUpdated': '2020-03-21T16:43:03.033Z',
    'latitude': '42.7044',
    'longitude': '19.3958',
    'name': 'Montenegro',
    'objectid': '3LstMSN5XMYBkxbe5HN7'
  }, {
    'country': 'AD',
    'dataHistories': [{'dead': '0', 'infected': '88', 'recovered': '1', 'sick': '87', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '88',
      'recovered': '1',
      'sick': '87',
      'time': 1584810002408
    }],
    'id': '712bd704-cc19-490e-85ec-64493f52b9b7',
    'lastUpdated': '2020-03-21T16:43:02.685Z',
    'latitude': '42.50837',
    'longitude': '1.517155',
    'name': 'Andorra',
    'objectid': 'dedMXSYR2k92wkSXNZqn'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '1', 'infected': '26', 'recovered': '5', 'sick': '20', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '26',
      'recovered': '5',
      'sick': '20',
      'time': 1584810002408
    }],
    'id': '5b423adf-00dc-4c03-9e4d-0bb4e48a33b9',
    'lastUpdated': '2020-03-21T16:34:03.498Z',
    'latitude': '28.7041',
    'longitude': '77.1025',
    'name': 'Delhi',
    'objectid': 'hqwsh1rmvkWI3LFUVuMk'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '1', 'infected': '315', 'recovered': '1', 'sick': '313', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '315',
      'recovered': '1',
      'sick': '313',
      'time': 1584810002408
    }],
    'id': '4aa0d529-56ee-4f4f-9812-47fa61601cdc',
    'lastUpdated': '2020-03-21T16:42:03.138Z',
    'latitude': '52.4125',
    'longitude': '12.5316',
    'name': 'Brandenburg',
    'objectid': 'NJjo2gfBvnbK4xatrsUz'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '1', 'infected': '32', 'recovered': '0', 'sick': '31', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '32',
      'recovered': '0',
      'sick': '31',
      'time': 1584810002408
    }],
    'id': '6984ea82-e9fe-4fc1-8eeb-04c1a9c3a4a9',
    'lastUpdated': '2020-03-21T16:43:03.046Z',
    'latitude': '14.652027',
    'longitude': '-61.011715',
    'name': 'Martinique',
    'objectid': 'SDdefnq1bc3ZNr7SpEsW'
  }, {
    'country': 'BT',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': '4d48c689-ca97-47c6-9ec2-b6ee0385efbd',
    'lastUpdated': '2020-03-21T16:43:02.985Z',
    'latitude': '27.5142',
    'longitude': '90.4336',
    'name': 'Bhutan',
    'objectid': 'HRDpwyxpqW9RN0xLFyNu'
  }, {
    'country': 'RW',
    'dataHistories': [{'dead': '0', 'infected': '17', 'recovered': '0', 'sick': '17', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '17',
      'recovered': '0',
      'sick': '17',
      'time': 1584810002408
    }],
    'id': '6bdb4db1-807b-4771-a0b0-86bdc792d5bd',
    'lastUpdated': '2020-03-21T16:43:02.991Z',
    'latitude': '-1.9403',
    'longitude': '29.8739',
    'name': 'Rwanda',
    'objectid': 'PEcgZGEkyhABztt1Ufgc'
  }, {
    'country': 'BY',
    'dataHistories': [{'dead': '0', 'infected': '76', 'recovered': '15', 'sick': '61', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '76',
      'recovered': '15',
      'sick': '61',
      'time': 1584810002408
    }],
    'id': '4feafa3c-5f37-4927-86f2-fdfd979bbbb4',
    'lastUpdated': '2020-03-21T16:43:02.723Z',
    'latitude': '53.709808',
    'longitude': '27.953388',
    'name': 'Belarus',
    'objectid': 'BGg6yVU5VP71B8NXU0oh'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '83', 'infected': '1524', 'recovered': '0', 'sick': '1441', 'time': 1584809582622}, {
      'dead': '83',
      'infected': '1524',
      'recovered': '0',
      'sick': '1441',
      'time': 1584810002408
    }],
    'id': '5bd65342-c9a4-401e-9029-1a0e21fe67fb',
    'lastUpdated': '2020-03-21T16:42:02.950Z',
    'latitude': '47.288374',
    'longitude': '-119.928431',
    'name': 'Washington',
    'objectid': 'vCUVQn7RK8pkw5y2rvYN'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '3', 'recovered': '0', 'sick': '3', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '3',
      'recovered': '0',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': '8a8f5e5a-7fe7-497e-a154-609e2a320045',
    'lastUpdated': '2020-03-21T16:34:03.505Z',
    'latitude': '15.9129',
    'longitude': '79.74',
    'name': 'Andhra Pradesh',
    'objectid': 'KtQIo2DoqjELtPAlyDVO'
  }, {
    'country': 'JP',
    'dataHistories': [{'dead': '35', 'infected': '1007', 'recovered': '215', 'sick': '757', 'time': 1584809582622}, {
      'dead': '35',
      'infected': '1007',
      'recovered': '215',
      'sick': '757',
      'time': 1584810002408
    }],
    'id': '67701f81-52b7-4639-8e83-b12062d88536',
    'lastUpdated': '2020-03-21T16:43:02.670Z',
    'latitude': '36.204823',
    'longitude': '138.25293',
    'name': 'Japan',
    'objectid': 'U13Gy4BpRLAZ95bPmBXd'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '61', 'infected': '3006', 'recovered': '0', 'sick': '2945', 'time': 1584809582622}, {
      'dead': '61',
      'infected': '3006',
      'recovered': '0',
      'sick': '2945',
      'time': 1584810002408
    }],
    'id': '4f43514a-08c1-4ddb-b581-1ea10289f282',
    'lastUpdated': '2020-03-21T16:34:06.536Z',
    'latitude': '48.6998',
    'longitude': '6.1878',
    'name': 'Grand Est',
    'objectid': 'RmEgf1xeclWt7XCF9oiR'
  }, {
    'country': 'DJ',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': '6a12fc26-d738-4096-b84d-c088a7c16501',
    'lastUpdated': '2020-03-21T16:43:02.963Z',
    'latitude': '11.572076',
    'longitude': '43.145645',
    'name': 'Djibouti',
    'objectid': 'l4nYeaqwy2yrEVqnijFj'
  }, {
    'country': 'TN',
    'dataHistories': [{'dead': '1', 'infected': '60', 'recovered': '1', 'sick': '58', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '60',
      'recovered': '1',
      'sick': '58',
      'time': 1584810002408
    }],
    'id': '4fc4817d-ace9-4ce1-a9ed-f41c26732ecd',
    'lastUpdated': '2020-03-21T16:43:02.641Z',
    'latitude': '34.201507',
    'longitude': '9.460554',
    'name': 'Tunisia',
    'objectid': 'Pr76V4raf108uSRoEXac'
  }, {
    'country': 'IS',
    'dataHistories': [{'dead': '1', 'infected': '473', 'recovered': '5', 'sick': '467', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '473',
      'recovered': '5',
      'sick': '467',
      'time': 1584810002408
    }],
    'id': '6c103385-6a64-49c8-99f4-470618497aa2',
    'lastUpdated': '2020-03-21T16:43:02.740Z',
    'latitude': '64.963051',
    'longitude': '-19.020836',
    'name': 'Iceland',
    'objectid': 'cPxe7nsRnOf6aOPqHElJ'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '2', 'infected': '1452', 'recovered': '4', 'sick': '1446', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '1452',
      'recovered': '4',
      'sick': '1446',
      'time': 1584810002408
    }],
    'id': '51b4b3d1-519d-43eb-b895-d4310e66816d',
    'lastUpdated': '2020-03-21T16:42:03.442Z',
    'latitude': '52.6367',
    'longitude': '9.8451',
    'name': 'Niedersachsen',
    'objectid': 'e3CJgTO8wVbBQZaxqNze'
  }, {
    'country': 'IQ',
    'dataHistories': [{'dead': '17', 'infected': '214', 'recovered': '51', 'sick': '146', 'time': 1584809582622}, {
      'dead': '17',
      'infected': '214',
      'recovered': '51',
      'sick': '146',
      'time': 1584810002408
    }],
    'id': '619efe10-18d8-411d-bb19-addc0bf68121',
    'lastUpdated': '2020-03-21T16:43:02.633Z',
    'latitude': '33.22319',
    'longitude': '43.679291',
    'name': 'Iraq',
    'objectid': 'b7TwXX46FA0EmH1CjHET'
  }, {
    'country': 'AU',
    'dataHistories': [{'dead': '0', 'infected': '10', 'recovered': '3', 'sick': '7', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '10',
      'recovered': '3',
      'sick': '7',
      'time': 1584810002408
    }],
    'id': '9a52a203-a5f6-4b4a-93ac-13e488adb136',
    'lastUpdated': '2020-03-21T07:57:10.903Z',
    'latitude': '-41.915264',
    'longitude': '146.725256',
    'name': 'Tasmania',
    'objectid': 'OnOseaqWdnuP18oruABW'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '1', 'infected': '287', 'recovered': '0', 'sick': '286', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '287',
      'recovered': '0',
      'sick': '286',
      'time': 1584810002408
    }],
    'id': '67f804f8-395c-4c42-befa-bdba8897b688',
    'lastUpdated': '2020-03-21T16:34:06.431Z',
    'latitude': '48.8799',
    'longitude': '0.1713',
    'name': 'Normandie',
    'objectid': 'BGtoyzb7y54LVlJ91rbf'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '4', 'infected': '1018', 'recovered': '1014', 'sick': '0', 'time': 1584809582622}, {
      'dead': '4',
      'infected': '1018',
      'recovered': '1014',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': '515d8a46-69e2-44c5-a23f-32ec2218a1e1',
    'lastUpdated': '2020-03-21T07:55:38.109Z',
    'latitude': '27.3818',
    'longitude': '111.510681',
    'name': 'Hunan',
    'objectid': 'tdNRDDrgvBQqqwzdFGh4'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '1', 'infected': '768', 'recovered': '1', 'sick': '766', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '768',
      'recovered': '1',
      'sick': '766',
      'time': 1584810002408
    }],
    'id': '6cc137a0-78da-41c7-946e-83a3eb5991ef',
    'lastUpdated': '2020-03-21T16:42:03.329Z',
    'latitude': '53.5511',
    'longitude': '9.9937',
    'name': 'Hamburg',
    'objectid': 'UfFaUECHINUutv1M9tzq'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '3', 'infected': '542', 'recovered': '536', 'sick': '3', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '542',
      'recovered': '536',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': '503c51ff-9822-4d74-b04a-b5c8075dab9a',
    'lastUpdated': '2020-03-21T07:55:02.390Z',
    'latitude': '30.14208',
    'longitude': '102.960701',
    'name': 'Sichuan',
    'objectid': 'eyK5bxFkwdoAouIBvLFM'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '1', 'infected': '383', 'recovered': '0', 'sick': '382', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '383',
      'recovered': '0',
      'sick': '382',
      'time': 1584810002408
    }],
    'id': '6e412764-a5e7-4c85-8190-5f00aa477ee7',
    'lastUpdated': '2020-03-21T16:42:03.335Z',
    'latitude': '54.2194',
    'longitude': '9.6961',
    'name': 'Schleswig-Holstein',
    'objectid': 'Q39XkabIYxt15mHINzTa'
  }, {
    'country': 'SG',
    'dataHistories': [{'dead': '2', 'infected': '432', 'recovered': '140', 'sick': '290', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '432',
      'recovered': '140',
      'sick': '290',
      'time': 1584810002408
    }],
    'id': '57d56d8f-4c88-4437-9662-e3458f554674',
    'lastUpdated': '2020-03-21T16:43:02.629Z',
    'latitude': '1.352083',
    'longitude': '103.819839',
    'name': 'Singapore',
    'objectid': '8pA3fM4xC2c2wv1b4TnE'
  }, {
    'country': 'PY',
    'dataHistories': [{'dead': '1', 'infected': '18', 'recovered': '0', 'sick': '17', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '18',
      'recovered': '0',
      'sick': '17',
      'time': 1584810002408
    }],
    'id': '6d23c329-d34c-4262-b162-c10d0b0127c3',
    'lastUpdated': '2020-03-21T16:43:03.013Z',
    'latitude': '-23.4425',
    'longitude': '-58.4438',
    'name': 'Paraguay',
    'objectid': 't2fq7L9UcXfhuXfQNVRj'
  }, {
    'country': 'CZ',
    'dataHistories': [{'dead': '0', 'infected': '925', 'recovered': '5', 'sick': '920', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '925',
      'recovered': '5',
      'sick': '920',
      'time': 1584810002408
    }],
    'id': '9c6f77e2-a295-439f-baf7-0e18f7c0c58e',
    'lastUpdated': '2020-03-21T16:43:02.897Z',
    'latitude': '49.731626',
    'longitude': '15.359413',
    'name': 'Czechia',
    'objectid': 'C6S76AggdWVU8G22jFHQ'
  }, {
    'country': 'CV',
    'dataHistories': [{'dead': '0', 'infected': '3', 'recovered': '0', 'sick': '3', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '3',
      'recovered': '0',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': '697b4712-5150-4624-98b7-909e74f544ba',
    'lastUpdated': '2020-03-21T16:43:03.028Z',
    'latitude': '16.5388',
    'longitude': '-23.0418',
    'name': 'Cape Verde',
    'objectid': 'lgqPuia1S3ApA5Lsl2la'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '1', 'infected': '51', 'recovered': '0', 'sick': '50', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '51',
      'recovered': '0',
      'sick': '50',
      'time': 1584810002408
    }],
    'id': '52008a71-1f9a-41a0-a877-91dee3890bce',
    'lastUpdated': '2020-03-21T16:43:02.634Z',
    'latitude': '16.265',
    'longitude': '-61.551',
    'name': 'Guadeloupe',
    'objectid': 'j8eMjjqNAqHAJhAKdBYN'
  }, {
    'country': 'ZZ',
    'dataHistories': [{'dead': '8', 'infected': '712', 'recovered': '527', 'sick': '177', 'time': 1584809582622}, {
      'dead': '8',
      'infected': '712',
      'recovered': '527',
      'sick': '177',
      'time': 1584810002408
    }],
    'id': '723fa2b0-48df-4c09-a5d0-57e77609bece',
    'lastUpdated': '2020-03-21T02:23:23.830Z',
    'latitude': '35.452016',
    'longitude': '139.664285',
    'name': 'Diamond Princess (Cruise)',
    'objectid': 'fNnE9CD0SttEVrCUo1Ym'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '0', 'infected': '4', 'recovered': '0', 'sick': '4', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '4',
      'recovered': '0',
      'sick': '4',
      'time': 1584810002408
    }],
    'id': '5d852d6a-fd05-4d80-8c07-bb7a8406bf32',
    'lastUpdated': '2020-03-21T16:34:06.620Z',
    'latitude': '18.0708',
    'longitude': '-63.0501',
    'name': 'Saint-Martin',
    'objectid': 'LBUtrLDKJiupXjlUNTUe'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '3139', 'infected': '67800', 'recovered': '58943', 'sick': '5718', 'time': 1584809582622}, {
      'dead': '3139',
      'infected': '67800',
      'recovered': '58943',
      'sick': '5718',
      'time': 1584810002408
    }],
    'id': '706b25d9-89d9-46bd-a0f9-358c003c0a1a',
    'lastUpdated': '2020-03-21T07:55:55.794Z',
    'latitude': '31.160629',
    'longitude': '112.255402',
    'name': 'Hubei',
    'objectid': 'fiJ14DCxw15e3SMemh8R'
  }, {
    'country': 'GA',
    'dataHistories': [{'dead': '1', 'infected': '4', 'recovered': '0', 'sick': '3', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '4',
      'recovered': '0',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': '57f1384b-bc70-484e-a1af-7f55d5c224be',
    'lastUpdated': '2020-03-21T16:43:02.993Z',
    'latitude': '-0.8037',
    'longitude': '11.6094',
    'name': 'Gabon',
    'objectid': '6pBi38TUgYfFm0bry2uh'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '55', 'recovered': '0', 'sick': '55', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '55',
      'recovered': '0',
      'sick': '55',
      'time': 1584810002408
    }],
    'id': '6edeac0d-cebf-4c0c-af6b-9aebc31ceae1',
    'lastUpdated': '2020-03-21T16:42:03.217Z',
    'latitude': '43.311643',
    'longitude': '-71.590315',
    'name': 'New Hampshire',
    'objectid': 'A84CwQ52kA46Hr7pn6Bm'
  }, {
    'country': 'MC',
    'dataHistories': [{'dead': '0', 'infected': '11', 'recovered': '0', 'sick': '11', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '11',
      'recovered': '0',
      'sick': '11',
      'time': 1584810002408
    }],
    'id': '9ecd871f-d6b4-4cad-a473-fa73c492abfd',
    'lastUpdated': '2020-03-21T16:43:02.982Z',
    'latitude': '43.740451',
    'longitude': '7.432032',
    'name': 'Monaco',
    'objectid': 'eLgKPNUwYM5MNDAtF6ql'
  }, {
    'country': 'GT',
    'dataHistories': [{'dead': '1', 'infected': '13', 'recovered': '0', 'sick': '12', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '13',
      'recovered': '0',
      'sick': '12',
      'time': 1584810002408
    }],
    'id': '708e0750-7444-49ab-9ae1-78eca7164aaf',
    'lastUpdated': '2020-03-21T16:43:02.938Z',
    'latitude': '14.628434',
    'longitude': '-90.522713',
    'name': 'Guatemala',
    'objectid': 'JUWE6bG3b5oL7fKQMSvv'
  }, {
    'country': 'SC',
    'dataHistories': [{'dead': '0', 'infected': '7', 'recovered': '0', 'sick': '7', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '7',
      'recovered': '0',
      'sick': '7',
      'time': 1584810002408
    }],
    'id': '59472abf-b8a9-4237-b8ca-4bc83809ac25',
    'lastUpdated': '2020-03-21T16:43:03.043Z',
    'latitude': '-4.6796',
    'longitude': '55.492',
    'name': 'Seychelles',
    'objectid': 'oB5fSyjWJ0FbNAkssuci'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '56', 'recovered': '0', 'sick': '56', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '56',
      'recovered': '0',
      'sick': '56',
      'time': 1584810002408
    }],
    'id': '90e6e064-0ce2-48a9-a5a6-e4e22087c9a4',
    'lastUpdated': '2020-03-21T16:42:02.810Z',
    'latitude': '45.2538',
    'longitude': '-69.4455',
    'name': 'Maine',
    'objectid': 'OcXNp9kNVSwrRlG3bNVN'
  }, {
    'country': 'CA',
    'dataHistories': [{'dead': '0', 'infected': '15', 'recovered': '0', 'sick': '15', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '15',
      'recovered': '0',
      'sick': '15',
      'time': 1584810002408
    }],
    'id': '5f7e2611-3278-4b7c-9c16-8c6c10b80c3f',
    'lastUpdated': '2020-03-21T16:42:02.919Z',
    'latitude': '45.65107',
    'longitude': '-63.582687',
    'name': 'Nova Scotia',
    'objectid': 'AVCpxeh0fuH2WrHWNDYH'
  }, {
    'country': 'AG',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': '72332703-aab6-4909-9240-6e175ad61af2',
    'lastUpdated': '2020-03-21T16:43:02.971Z',
    'latitude': '17.0608',
    'longitude': '-61.7964',
    'name': 'Antigua and Barbuda',
    'objectid': '7hVFcEV7nV0MrQr3LHrl'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '8', 'infected': '1399', 'recovered': '1325', 'sick': '66', 'time': 1584809582622}, {
      'dead': '8',
      'infected': '1399',
      'recovered': '1325',
      'sick': '66',
      'time': 1584810002408
    }],
    'id': '5c18051c-9ff7-49dc-8cde-7b8290db3b77',
    'lastUpdated': '2020-03-21T07:55:27.714Z',
    'latitude': '23.363855',
    'longitude': '113.373448',
    'name': 'Guangdong',
    'objectid': 'IAX0OQLVnUwU7FX0ENF1'
  }, {
    'country': 'PL',
    'dataHistories': [{'dead': '5', 'infected': '452', 'recovered': '13', 'sick': '434', 'time': 1584809582622}, {
      'dead': '5',
      'infected': '452',
      'recovered': '13',
      'sick': '434',
      'time': 1584810002408
    }],
    'id': '70016798-f763-4cc0-9424-282ae0b39666',
    'lastUpdated': '2020-03-21T16:43:02.665Z',
    'latitude': '52.2297',
    'longitude': '21.0122',
    'name': 'Poland',
    'objectid': 'ZAZNuCK1VweBaTLCFzCk'
  }, {
    'country': 'CR',
    'dataHistories': [{'dead': '2', 'infected': '113', 'recovered': '2', 'sick': '109', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '113',
      'recovered': '2',
      'sick': '109',
      'time': 1584810002408
    }],
    'id': 'a200ca87-ec6a-4d84-8a10-92a243113671',
    'lastUpdated': '2020-03-21T16:43:02.731Z',
    'latitude': '10.327273',
    'longitude': '-84.387618',
    'name': 'Costa Rica',
    'objectid': 'EQzJvzVHKjs8kLmK7BMu'
  }, {
    'country': 'KG',
    'dataHistories': [{'dead': '0', 'infected': '14', 'recovered': '0', 'sick': '14', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '14',
      'recovered': '0',
      'sick': '14',
      'time': 1584810002408
    }],
    'id': '751afeb2-64ad-433e-898e-aed33b10d28f',
    'lastUpdated': '2020-03-21T16:43:03.002Z',
    'latitude': '41.2044',
    'longitude': '74.7661',
    'name': 'Kyrgyzstan',
    'objectid': 'fst48lrFxiMJbQPf4nur'
  }, {
    'country': 'PS',
    'dataHistories': [{'dead': '0', 'infected': '52', 'recovered': '17', 'sick': '35', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '52',
      'recovered': '17',
      'sick': '35',
      'time': 1584810002408
    }],
    'id': '60314dcf-2bf6-401a-8609-50073aae799d',
    'lastUpdated': '2020-03-21T16:43:02.651Z',
    'latitude': '31.9522',
    'longitude': '35.2332',
    'name': 'Palestine',
    'objectid': 'YMzKw0SnXG71VT7H1jff'
  }, {
    'country': 'AF',
    'dataHistories': [{'dead': '0', 'infected': '24', 'recovered': '1', 'sick': '23', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '24',
      'recovered': '1',
      'sick': '23',
      'time': 1584810002408
    }],
    'id': '9da7ad97-3825-4df7-8a00-5cc0348c2ab6',
    'lastUpdated': '2020-03-21T16:43:03.045Z',
    'latitude': '33.93911',
    'longitude': '67.709953',
    'name': 'Afghanistan',
    'objectid': 'FCDmlmnIIswd8bQiUjfN'
  }, {
    'country': 'SR',
    'dataHistories': [{'dead': '0', 'infected': '4', 'recovered': '0', 'sick': '4', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '4',
      'recovered': '0',
      'sick': '4',
      'time': 1584810002408
    }],
    'id': '6134f7d0-be96-427d-879d-d8ffac87486d',
    'lastUpdated': '2020-03-21T16:43:02.989Z',
    'latitude': '3.9193051',
    'longitude': '-56.0277824',
    'name': 'Suriname',
    'objectid': 'LglKINHyQpYpFxjckbQ6'
  }, {
    'country': 'GI',
    'dataHistories': [{'dead': '0', 'infected': '10', 'recovered': '2', 'sick': '8', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '10',
      'recovered': '2',
      'sick': '8',
      'time': 1584810002408
    }],
    'id': '7705826b-babc-4d3a-af66-068cf52d104b',
    'lastUpdated': '2020-03-21T16:43:02.978Z',
    'latitude': '36.1408',
    'longitude': '-5.3536',
    'name': 'Gibraltar',
    'objectid': '2p11BjSAs3wVyymgqBOe'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '2', 'infected': '161', 'recovered': '0', 'sick': '159', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '161',
      'recovered': '0',
      'sick': '159',
      'time': 1584810002408
    }],
    'id': '615e6ad8-72a4-4bcf-99b5-b1368fcd4627',
    'lastUpdated': '2020-03-21T16:42:03.154Z',
    'latitude': '39.74536',
    'longitude': '-116.724977',
    'name': 'Nevada',
    'objectid': 'H3bDg4eV30up4WWrIDAS'
  }, {
    'country': 'MV',
    'dataHistories': [{'dead': '0', 'infected': '13', 'recovered': '3', 'sick': '10', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '13',
      'recovered': '3',
      'sick': '10',
      'time': 1584810002408
    }],
    'id': '807d18c6-c6e3-4b51-8876-820b468b9f32',
    'lastUpdated': '2020-03-21T16:43:02.987Z',
    'latitude': '3.2028',
    'longitude': '73.2207',
    'name': 'Maldives',
    'objectid': 'm45gI2UbWMuTrOnTtp9k'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '54', 'recovered': '0', 'sick': '54', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '54',
      'recovered': '0',
      'sick': '54',
      'time': 1584810002408
    }],
    'id': 'ab7af634-4784-414d-b0f3-b65be8e3ece0',
    'lastUpdated': '2020-03-21T16:42:02.891Z',
    'latitude': '41.823261',
    'longitude': '-71.412257',
    'name': 'Rhode Island',
    'objectid': 'AEUWUHS65qvjEslew11c'
  }, {
    'country': 'MK',
    'dataHistories': [{'dead': '0', 'infected': '85', 'recovered': '1', 'sick': '84', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '85',
      'recovered': '1',
      'sick': '84',
      'time': 1584810002408
    }],
    'id': '77ecc8bf-23b7-4a75-b990-d529fe7ace4e',
    'lastUpdated': '2020-03-21T16:43:02.746Z',
    'latitude': '41.643351',
    'longitude': '21.668393',
    'name': 'North Macedonia',
    'objectid': '19MvIhipqTyYv1H37Upw'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '3', 'recovered': '0', 'sick': '3', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '3',
      'recovered': '0',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': '70336059-85b7-45c5-9cf7-9a2d78a6d5cd',
    'lastUpdated': '2020-03-21T16:34:03.486Z',
    'latitude': '22.9868',
    'longitude': '87.855',
    'name': 'West Bengal',
    'objectid': '0n54EMSDJcRoT1QEvw80'
  }, {
    'country': 'AU',
    'dataHistories': [{'dead': '0', 'infected': '50', 'recovered': '3', 'sick': '47', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '50',
      'recovered': '3',
      'sick': '47',
      'time': 1584810002408
    }],
    'id': 'a709c63c-1b7c-413b-940d-e5cd33e94cf0',
    'lastUpdated': '2020-03-21T16:40:04.123Z',
    'latitude': '-30.000233',
    'longitude': '136.209152',
    'name': 'South Australia',
    'objectid': 'a9p9pAOsjg1WAjPGc2a6'
  }, {
    'country': 'ID',
    'dataHistories': [{'dead': '38', 'infected': '450', 'recovered': '20', 'sick': '392', 'time': 1584809582622}, {
      'dead': '38',
      'infected': '450',
      'recovered': '20',
      'sick': '392',
      'time': 1584810002408
    }],
    'id': '698a8419-875a-4a98-a629-5d63b795e957',
    'lastUpdated': '2020-03-21T16:43:02.707Z',
    'latitude': '-1.572184',
    'longitude': '115.66779',
    'name': 'Indonesia',
    'objectid': '2KHYUb5t3lwzVVmDjwNX'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '4', 'infected': '554', 'recovered': '0', 'sick': '550', 'time': 1584809582622}, {
      'dead': '4',
      'infected': '554',
      'recovered': '0',
      'sick': '550',
      'time': 1584810002408
    }],
    'id': '858d79fb-1d3d-4e94-83e6-9986df3214b1',
    'lastUpdated': '2020-03-21T16:42:03.021Z',
    'latitude': '44.3148',
    'longitude': '-85.6024',
    'name': 'Michigan',
    'objectid': 'wgRwpPMGBaKLAl1xo1C7'
  }, {
    'country': 'KZ',
    'dataHistories': [{'dead': '0', 'infected': '53', 'recovered': '0', 'sick': '53', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '53',
      'recovered': '0',
      'sick': '53',
      'time': 1584810002408
    }],
    'id': '6ec27f6b-5bbb-43fe-8a12-be68bf1392b0',
    'lastUpdated': '2020-03-21T16:43:02.644Z',
    'latitude': '48.0196',
    'longitude': '66.9237',
    'name': 'Kazakhstan',
    'objectid': 'etrmrftkQg6Kbd9seAga'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '1', 'infected': '235', 'recovered': '3', 'sick': '231', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '235',
      'recovered': '3',
      'sick': '231',
      'time': 1584810002408
    }],
    'id': '81c90567-fc5a-4443-ad7c-202d8e149cc9',
    'lastUpdated': '2020-03-21T16:42:03.433Z',
    'latitude': '51.011',
    'longitude': '10.8453',
    'name': 'Thüringen',
    'objectid': 'a9OgUWo6ZSWA3HyF0xnj'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '100', 'recovered': '0', 'sick': '100', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '100',
      'recovered': '0',
      'sick': '100',
      'time': 1584810002408
    }],
    'id': 'b027e1fb-404f-49cb-a583-b0a3fb12e4a5',
    'lastUpdated': '2020-03-21T16:42:02.849Z',
    'latitude': '34.69522',
    'longitude': '-92.288012',
    'name': 'Arkansas',
    'objectid': 'gIdgxJZfTl2QOSYEwMAz'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': '7a511d2b-3a72-4b55-9219-e9f3e776fbbe',
    'lastUpdated': '2020-03-21T16:34:03.466Z',
    'latitude': '21.2787',
    'longitude': '81.8661',
    'name': 'Chhattisgarh',
    'objectid': 'pu6AXEsDnpmmqnhajobN'
  }, {
    'country': 'ET',
    'dataHistories': [{'dead': '0', 'infected': '9', 'recovered': '0', 'sick': '9', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '9',
      'recovered': '0',
      'sick': '9',
      'time': 1584810002408
    }],
    'id': '7f69e082-5bc9-475e-b2ed-aa4c7414ec8a',
    'lastUpdated': '2020-03-21T16:43:03.000Z',
    'latitude': '9.145',
    'longitude': '40.4897',
    'name': 'Ethiopia',
    'objectid': 'xY69Nr3VSiZCwD2Qp0SD'
  }, {
    'country': 'BE',
    'dataHistories': [{'dead': '67', 'infected': '2815', 'recovered': '263', 'sick': '2485', 'time': 1584809582622}, {
      'dead': '67',
      'infected': '2815',
      'recovered': '263',
      'sick': '2485',
      'time': 1584810002408
    }],
    'id': 'a8b00431-4715-4352-bc52-20dc0ada74df',
    'lastUpdated': '2020-03-21T16:43:02.697Z',
    'latitude': '50.503887',
    'longitude': '4.469936',
    'name': 'Belgium',
    'objectid': 'qpAxVz0garcS0gNZxtOw'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '3', 'recovered': '0', 'sick': '3', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '3',
      'recovered': '0',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': '71410252-1134-4686-87f3-12facd9451a8',
    'lastUpdated': '2020-03-21T16:34:03.500Z',
    'latitude': '30.0668',
    'longitude': '79.0193',
    'name': 'Uttarakhand',
    'objectid': 'NMeZEcGToxXfpi16PfFV'
  }, {
    'country': 'CA',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': '87e256f0-568b-4887-8247-43f858a805d8',
    'lastUpdated': '2020-03-21T11:54:29.480Z',
    'latitude': '46.5107',
    'longitude': '-63.4168',
    'name': 'Prince Edward Island',
    'objectid': 'vjK6292ALJl5wq8XHw3P'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '1', 'infected': '935', 'recovered': '934', 'sick': '0', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '935',
      'recovered': '934',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': '6f7ed552-3ecb-41e3-84d0-a357ec5ecba0',
    'lastUpdated': '2020-03-21T07:55:32.477Z',
    'latitude': '27.285971',
    'longitude': '116.01609',
    'name': 'Jiangxi',
    'objectid': 'AmBYm5J6E9Cuez1FQjiN'
  }, {
    'country': 'SM',
    'dataHistories': [{'dead': '20', 'infected': '151', 'recovered': '4', 'sick': '127', 'time': 1584809582622}, {
      'dead': '20',
      'infected': '151',
      'recovered': '4',
      'sick': '127',
      'time': 1584810002408
    }],
    'id': '841e29bd-74fe-4dcd-a6f7-f14cc9d85313',
    'lastUpdated': '2020-03-21T16:43:02.692Z',
    'latitude': '43.94236',
    'longitude': '12.457777',
    'name': 'San Marino',
    'objectid': 'U12rMD5GDW58Q0lIwrB1'
  }, {
    'country': 'SZ',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': 'bd57f38a-3772-440c-8ab3-80f1b181f9dd',
    'lastUpdated': '2020-03-21T16:43:03.014Z',
    'latitude': '-26.5225',
    'longitude': '31.4659',
    'name': 'Eswatini',
    'objectid': 'PuQgOd9KWiMzGZXm11sR'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '14', 'infected': '485', 'recovered': '0', 'sick': '471', 'time': 1584809582622}, {
      'dead': '14',
      'infected': '485',
      'recovered': '0',
      'sick': '471',
      'time': 1584810002408
    }],
    'id': '7a6c4e24-c028-4d79-a611-4ad8943b4ec1',
    'lastUpdated': '2020-03-21T16:42:02.981Z',
    'latitude': '32.528564',
    'longitude': '-83.280125',
    'name': 'Georgia (US)',
    'objectid': 'IvQkDJkTAsoIqPRAU25n'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '1', 'infected': '265', 'recovered': '1', 'sick': '263', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '265',
      'recovered': '1',
      'sick': '263',
      'time': 1584810002408
    }],
    'id': '8237a4ad-87df-4b54-a3ec-a057794a17d9',
    'lastUpdated': '2020-03-21T07:59:54.872Z',
    'latitude': '35.693323',
    'longitude': '-86.605748',
    'name': 'Tennessee',
    'objectid': 'nLhJXE2apq8yNNj363ai'
  }, {
    'country': 'CD',
    'dataHistories': [{'dead': '1', 'infected': '23', 'recovered': '0', 'sick': '22', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '23',
      'recovered': '0',
      'sick': '22',
      'time': 1584810002408
    }],
    'id': 'ad551a0a-2f7f-4ef4-a488-b4c65097608c',
    'lastUpdated': '2020-03-21T13:43:03.583Z',
    'latitude': '-4.0383',
    'longitude': '21.7587',
    'name': 'DR Congo',
    'objectid': 'T3iRf8mTUTAzbKrORTap'
  }, {
    'country': 'BH',
    'dataHistories': [{'dead': '1', 'infected': '305', 'recovered': '125', 'sick': '179', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '305',
      'recovered': '125',
      'sick': '179',
      'time': 1584810002408
    }],
    'id': '73b6da68-5a30-433b-9303-5e8e9cad165e',
    'lastUpdated': '2020-03-21T16:43:02.695Z',
    'latitude': '26.0667',
    'longitude': '50.557701',
    'name': 'Bahrain',
    'objectid': 'C7cj4nwRITs13KnaJrQ2'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '10', 'infected': '537', 'recovered': '0', 'sick': '527', 'time': 1584809582622}, {
      'dead': '10',
      'infected': '537',
      'recovered': '0',
      'sick': '527',
      'time': 1584810002408
    }],
    'id': '882104e4-3c6a-4f14-922a-ef45313d85d1',
    'lastUpdated': '2020-03-21T16:34:06.528Z',
    'latitude': '43.8927',
    'longitude': '3.2828',
    'name': 'Occitanie',
    'objectid': 'WAnbFrEjtZDTCIYBt8rz'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '2', 'infected': '432', 'recovered': '2', 'sick': '428', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '432',
      'recovered': '2',
      'sick': '428',
      'time': 1584810002408
    }],
    'id': '7cc06253-614b-4d96-92ed-661cef7b6a59',
    'lastUpdated': '2020-03-21T16:34:06.619Z',
    'latitude': '45.7087',
    'longitude': '0.6269',
    'name': 'Nouvelle-Aquitaine',
    'objectid': 'cpf3Y5PQTYywIm3PrpIQ'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '40', 'recovered': '3', 'sick': '37', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '40',
      'recovered': '3',
      'sick': '37',
      'time': 1584810002408
    }],
    'id': '849a23f9-341b-4b8d-aeea-eebb8e388c6b',
    'lastUpdated': '2020-03-21T16:34:03.476Z',
    'latitude': '10.8505',
    'longitude': '76.2711',
    'name': 'Kerala',
    'objectid': 'idymmgoqLHImnBdyC7r7'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': 'c20b5a77-49ca-443f-ad44-0f3ff542c068',
    'lastUpdated': '2020-03-21T16:34:03.467Z',
    'latitude': '30.7333',
    'longitude': '76.7794',
    'name': 'Chandigarh',
    'objectid': 'Esl5UlCVB9s8pmGB5Ofr'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '2', 'infected': '29', 'recovered': '0', 'sick': '27', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '29',
      'recovered': '0',
      'sick': '27',
      'time': 1584810002408
    }],
    'id': '7f421668-15dd-4583-8e1e-8d9ca1bface9',
    'lastUpdated': '2020-03-21T16:42:03.018Z',
    'latitude': '44.5588',
    'longitude': '-72.5778',
    'name': 'Vermont',
    'objectid': 'jPC0eOG50FWknCDe3K6P'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '0', 'infected': '75', 'recovered': '75', 'sick': '0', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '75',
      'recovered': '75',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': '838daf36-c45f-446a-b96b-f534a54f498c',
    'lastUpdated': '2020-03-21T07:53:15.653Z',
    'latitude': '37.330509',
    'longitude': '105.977203',
    'name': 'Ningxia',
    'objectid': 'MntmjjuHljarCdt6aIeE'
  }, {
    'country': 'TG',
    'dataHistories': [{'dead': '0', 'infected': '16', 'recovered': '0', 'sick': '16', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '16',
      'recovered': '0',
      'sick': '16',
      'time': 1584810002408
    }],
    'id': 'b3d214bb-5ff6-4022-b5dd-c3313378a229',
    'lastUpdated': '2020-03-21T16:43:03.070Z',
    'latitude': '8.6195',
    'longitude': '0.8248',
    'name': 'Togo',
    'objectid': 'JrBbirlBKGdWSdcDt7PF'
  }, {
    'country': 'BF',
    'dataHistories': [{'dead': '3', 'infected': '64', 'recovered': '5', 'sick': '56', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '64',
      'recovered': '5',
      'sick': '56',
      'time': 1584810002408
    }],
    'id': '76770c74-128c-45c4-8364-b8f8ca7b12f4',
    'lastUpdated': '2020-03-21T16:43:02.750Z',
    'latitude': '12.2383',
    'longitude': '-1.5616',
    'name': 'Burkina Faso',
    'objectid': 'Tup6oDCHj6DgqZR3nQ3x'
  }, {
    'country': 'SK',
    'dataHistories': [{'dead': '0', 'infected': '138', 'recovered': '7', 'sick': '131', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '138',
      'recovered': '7',
      'sick': '131',
      'time': 1584810002408
    }],
    'id': '9036f125-00b9-4e17-a6a2-1a689b724981',
    'lastUpdated': '2020-03-21T16:43:02.722Z',
    'latitude': '48.669',
    'longitude': '19.699',
    'name': 'Slovakia',
    'objectid': 'FzIDXoqWnTI3nUfhPyT2'
  }, {
    'country': 'HR',
    'dataHistories': [{'dead': '1', 'infected': '206', 'recovered': '5', 'sick': '200', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '206',
      'recovered': '5',
      'sick': '200',
      'time': 1584810002408
    }],
    'id': '8947401a-5dac-4f25-a997-ff7d5e2b7d18',
    'lastUpdated': '2020-03-21T16:43:02.631Z',
    'latitude': '45.099998',
    'longitude': '15.2',
    'name': 'Croatia',
    'objectid': 'B82Ef45M8cDu4q7VsSHF'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '1', 'infected': '63', 'recovered': '0', 'sick': '62', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '63',
      'recovered': '0',
      'sick': '62',
      'time': 1584810002408
    }],
    'id': '910bca6d-66e7-422a-9f63-307fb5b63cab',
    'lastUpdated': '2020-03-21T16:34:03.515Z',
    'latitude': '19.7515',
    'longitude': '75.7139',
    'name': 'Maharashtra',
    'objectid': 'mJtdLs4ub6CkcAOeMWUm'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '39', 'recovered': '0', 'sick': '39', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '39',
      'recovered': '0',
      'sick': '39',
      'time': 1584810002408
    }],
    'id': 'c52050cf-03de-4d77-a6b9-9524baca3445',
    'lastUpdated': '2020-03-21T16:42:02.857Z',
    'latitude': '38.831163',
    'longitude': '-75.375673',
    'name': 'Delaware',
    'objectid': 'dzCgqYduzyncjNKU9z6G'
  }, {
    'country': 'AR',
    'dataHistories': [{'dead': '4', 'infected': '158', 'recovered': '3', 'sick': '151', 'time': 1584809582622}, {
      'dead': '4',
      'infected': '158',
      'recovered': '3',
      'sick': '151',
      'time': 1584810002408
    }],
    'id': '87c345e2-6ad9-4eed-a9da-37ebef615c27',
    'lastUpdated': '2020-03-21T16:43:02.632Z',
    'latitude': '-34.6037',
    'longitude': '-58.3816',
    'name': 'Argentina',
    'objectid': 'wEl0cjiA6OcZiI9kaSsF'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '1', 'infected': '15', 'recovered': '1', 'sick': '13', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '15',
      'recovered': '1',
      'sick': '13',
      'time': 1584810002408
    }],
    'id': '83eb7119-a502-4b29-95e5-08590a66a7bd',
    'lastUpdated': '2020-03-21T16:34:03.575Z',
    'latitude': '15.3173',
    'longitude': '75.7139',
    'name': 'Karnataka',
    'objectid': 'HN5mGmxlqlSeFSNeu1K5'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '17', 'infected': '3668', 'recovered': '19', 'sick': '3632', 'time': 1584809582622}, {
      'dead': '17',
      'infected': '3668',
      'recovered': '19',
      'sick': '3632',
      'time': 1584810002408
    }],
    'id': 'b3d3806f-8a8a-438e-8178-df24fb009132',
    'lastUpdated': '2020-03-21T16:42:03.221Z',
    'latitude': '48.6616',
    'longitude': '9.3501',
    'name': 'Baden-Württemberg',
    'objectid': 'N3XsRBwJSsNclkEf7Zz5'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': '8b3c42f6-ec35-4ca7-ae54-e2f99501bf47',
    'lastUpdated': '2020-03-21T16:34:03.483Z',
    'latitude': '11.943179',
    'longitude': '79.808206',
    'name': 'Puducherry',
    'objectid': 'V1qE740s3EUGyKGr6SVv'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '0', 'recovered': '147', 'sick': '0', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '0',
      'recovered': '147',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': '9d937dcd-e93a-4f36-807c-de283fed1609',
    'lastUpdated': '2020-03-21T16:43:02.368Z',
    'latitude': '37.0902',
    'longitude': '-95.7129',
    'name': 'Unknown US state',
    'objectid': '0tFoopNTs6e4tOoaltu2'
  }, {
    'country': 'NG',
    'dataHistories': [{'dead': '0', 'infected': '22', 'recovered': '1', 'sick': '21', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '22',
      'recovered': '1',
      'sick': '21',
      'time': 1584810002408
    }],
    'id': '8c350d96-1981-4811-99fd-05cfe7a6d765',
    'lastUpdated': '2020-03-21T16:43:02.998Z',
    'latitude': '9.081999',
    'longitude': '8.675277',
    'name': 'Nigeria',
    'objectid': 'xHWPTTpNHEwWv6MqfxP5'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '1', 'infected': '48', 'recovered': '0', 'sick': '47', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '48',
      'recovered': '0',
      'sick': '47',
      'time': 1584810002408
    }],
    'id': '916d20b4-7c73-4875-8e1b-ebe9f5f1f888',
    'lastUpdated': '2020-03-21T16:42:02.826Z',
    'latitude': '39.0119',
    'longitude': '-98.4842',
    'name': 'Kansas',
    'objectid': 'Rf4uvBfP3GRDSHdZElRd'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '3', 'recovered': '1', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '3',
      'recovered': '1',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'ccb78b6f-0a01-4819-8fe5-98156b4d97a2',
    'lastUpdated': '2020-03-21T16:34:03.527Z',
    'latitude': '11.1271',
    'longitude': '78.6569',
    'name': 'Tamil Nadu',
    'objectid': 'FeS45oMNC27pI17F0xEV'
  }, {
    'country': 'TH',
    'dataHistories': [{'dead': '1', 'infected': '411', 'recovered': '44', 'sick': '366', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '411',
      'recovered': '44',
      'sick': '366',
      'time': 1584810002408
    }],
    'id': '96693d5c-d570-41e8-9dde-99e4f093a432',
    'lastUpdated': '2020-03-21T16:43:02.649Z',
    'latitude': '15.870032',
    'longitude': '100.992538',
    'name': 'Thailand',
    'objectid': 'zvdC0u72Bk5YKNaazZFZ'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '8', 'infected': '504', 'recovered': '396', 'sick': '100', 'time': 1584809582622}, {
      'dead': '8',
      'infected': '504',
      'recovered': '396',
      'sick': '100',
      'time': 1584810002408
    }],
    'id': '8b65e607-5829-412d-8fcd-f5be32d75034',
    'lastUpdated': '2020-03-21T07:54:35.894Z',
    'latitude': '39.904202',
    'longitude': '116.407394',
    'name': 'Beijing',
    'objectid': 'alj4hkxg9cjrTxOzwFKt'
  }, {
    'country': 'FJ',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'b4309fa3-1c0c-4a42-adb9-4746a8e29d85',
    'lastUpdated': '2020-03-21T16:43:03.011Z',
    'latitude': '-17.713371',
    'longitude': '178.065033',
    'name': 'Fiji',
    'objectid': 'ZmzOT0sJgfWXEpRImItC'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '6', 'infected': '576', 'recovered': '570', 'sick': '0', 'time': 1584809582622}, {
      'dead': '6',
      'infected': '576',
      'recovered': '570',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': '8ddaf1d1-a450-46c8-b52a-b6ea14b7dc6d',
    'lastUpdated': '2020-03-21T07:56:06.924Z',
    'latitude': '29.431585',
    'longitude': '106.912254',
    'name': 'Chongqing',
    'objectid': 'FErOU1m4Tj7jIkRam3vF'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '7', 'infected': '764', 'recovered': '749', 'sick': '8', 'time': 1584809582622}, {
      'dead': '7',
      'infected': '764',
      'recovered': '749',
      'sick': '8',
      'time': 1584810002408
    }],
    'id': 'b1050919-0cda-4776-bbd3-1394a2327e46',
    'lastUpdated': '2020-03-21T07:53:49.883Z',
    'latitude': '36.395859',
    'longitude': '118.769882',
    'name': 'Shandong',
    'objectid': 'U0tkTJ9CGsBuFJ2Gdoum'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '7', 'infected': '168', 'recovered': '0', 'sick': '161', 'time': 1584809582622}, {
      'dead': '7',
      'infected': '168',
      'recovered': '0',
      'sick': '161',
      'time': 1584810002408
    }],
    'id': '92cf51ca-0f09-4019-a82b-68926a586be1',
    'lastUpdated': '2020-03-21T16:34:06.535Z',
    'latitude': '42.0396',
    'longitude': '9.0129',
    'name': 'Corse',
    'objectid': 'YGXgIObKVabP2CYEdcb9'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '0', 'infected': '285', 'recovered': '0', 'sick': '285', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '285',
      'recovered': '0',
      'sick': '285',
      'time': 1584810002408
    }],
    'id': '97fb9872-345b-4ed8-b712-3a3d3d34702f',
    'lastUpdated': '2020-03-21T16:42:03.230Z',
    'latitude': '49.3964',
    'longitude': '7.023',
    'name': 'Saarland',
    'objectid': 'AKjFRQGnzuuZQhv5Qwx7'
  }, {
    'country': 'HT',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'cfe8a74c-7093-4645-8e5e-250dad9dedee',
    'lastUpdated': '2020-03-21T16:43:03.007Z',
    'latitude': '19.0558',
    'longitude': '-73.0513',
    'name': 'Haiti',
    'objectid': 'InZ38sIqyK7FN7XAOZoX'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '115', 'recovered': '0', 'sick': '115', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '115',
      'recovered': '0',
      'sick': '115',
      'time': 1584810002408
    }],
    'id': '9cc19257-1cb7-4e90-8a5e-9db2baaae311',
    'lastUpdated': '2020-03-21T16:42:03.159Z',
    'latitude': '46.7296',
    'longitude': '-94.6859',
    'name': 'Minnesota',
    'objectid': 'PJvVYosLIhbcRZYnKX1R'
  }, {
    'country': 'MT',
    'dataHistories': [{'dead': '0', 'infected': '73', 'recovered': '2', 'sick': '71', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '73',
      'recovered': '2',
      'sick': '71',
      'time': 1584810002408
    }],
    'id': '92770171-5376-4b78-b048-3f3093729784',
    'lastUpdated': '2020-03-21T16:43:02.704Z',
    'latitude': '35.894231',
    'longitude': '14.432846',
    'name': 'Malta',
    'objectid': 'h9UqxYZ5xC4JZrmdDz0q'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '21', 'recovered': '0', 'sick': '21', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '21',
      'recovered': '0',
      'sick': '21',
      'time': 1584810002408
    }],
    'id': 'bc3c8613-4bf3-4005-9d7d-3bbdeee81645',
    'lastUpdated': '2020-03-21T16:42:02.975Z',
    'latitude': '42.962334',
    'longitude': '-107.534868',
    'name': 'Wyoming',
    'objectid': 'DrGzziUglmBognCGY7R2'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '4', 'infected': '194', 'recovered': '0', 'sick': '190', 'time': 1584809582622}, {
      'dead': '4',
      'infected': '194',
      'recovered': '0',
      'sick': '190',
      'time': 1584810002408
    }],
    'id': '9634a5de-2912-42ab-beab-95bfbabd8cbd',
    'lastUpdated': '2020-03-21T16:42:03.037Z',
    'latitude': '41.6032',
    'longitude': '-73.0877',
    'name': 'Connecticut',
    'objectid': 'Zqy0gftQzocR49jEJNMl'
  }, {
    'country': 'ZM',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'b79a48c8-fb2c-4b4a-9fc2-8ed494dada0e',
    'lastUpdated': '2020-03-21T16:43:02.934Z',
    'latitude': '-13.133896',
    'longitude': '27.849332',
    'name': 'Zambia',
    'objectid': '3IlPjAbP5qVMn1nlgLTJ'
  }, {
    'country': 'CY',
    'dataHistories': [{'dead': '0', 'infected': '84', 'recovered': '0', 'sick': '84', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '84',
      'recovered': '0',
      'sick': '84',
      'time': 1584810002408
    }],
    'id': '934df4bc-df35-4e56-9714-9396e38e0347',
    'lastUpdated': '2020-03-21T16:43:02.737Z',
    'latitude': '35.1264',
    'longitude': '33.4299',
    'name': 'Cyprus',
    'objectid': 'JQByE4l2OA6sGOqIcWrM'
  }, {
    'country': 'CO',
    'dataHistories': [{'dead': '0', 'infected': '196', 'recovered': '1', 'sick': '195', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '196',
      'recovered': '1',
      'sick': '195',
      'time': 1584810002408
    }],
    'id': 'ae8979ec-3968-40b9-a1cd-93a4aea61be7',
    'lastUpdated': '2020-03-21T16:43:02.703Z',
    'latitude': '3.527606',
    'longitude': '-72.998674',
    'name': 'Colombia',
    'objectid': 'VAAmtxtDuCY0o55zRsOh'
  }, {
    'country': 'SE',
    'dataHistories': [{'dead': '20', 'infected': '1764', 'recovered': '16', 'sick': '1728', 'time': 1584809582622}, {
      'dead': '20',
      'infected': '1764',
      'recovered': '16',
      'sick': '1728',
      'time': 1584810002408
    }],
    'id': 'd702b72b-07dd-41aa-b10b-6b69ddefacf0',
    'lastUpdated': '2020-03-21T16:43:02.700Z',
    'latitude': '60.128162',
    'longitude': '18.643501',
    'name': 'Sweden',
    'objectid': 'bignnyt2A8BBx8VNo32p'
  }, {
    'country': 'CU',
    'dataHistories': [{'dead': '1', 'infected': '21', 'recovered': '0', 'sick': '20', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '21',
      'recovered': '0',
      'sick': '20',
      'time': 1584810002408
    }],
    'id': '9f65195f-a7ad-492a-a92a-479b6e817525',
    'lastUpdated': '2020-03-21T16:43:02.996Z',
    'latitude': '21.5218',
    'longitude': '-77.7812',
    'name': 'Cuba',
    'objectid': 'VAG9AcMABTf8oIAfELPh'
  }, {
    'country': 'BR',
    'dataHistories': [{'dead': '18', 'infected': '1021', 'recovered': '2', 'sick': '1001', 'time': 1584809582622}, {
      'dead': '18',
      'infected': '1021',
      'recovered': '2',
      'sick': '1001',
      'time': 1584810002408
    }],
    'id': 'a6b23367-34d9-4eda-beea-3488612e1841',
    'lastUpdated': '2020-03-21T16:43:02.691Z',
    'latitude': '-14.235004',
    'longitude': '-51.925282',
    'name': 'Brazil',
    'objectid': '1f0YoV0vAcexEhpESyZc'
  }, {
    'country': 'TT',
    'dataHistories': [{'dead': '0', 'infected': '9', 'recovered': '0', 'sick': '9', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '9',
      'recovered': '0',
      'sick': '9',
      'time': 1584810002408
    }],
    'id': 'c7d40006-4c05-4337-8eb5-ff8f19a21219',
    'lastUpdated': '2020-03-21T15:13:03.447Z',
    'latitude': '10.6918',
    'longitude': '-61.2225',
    'name': 'Trinidad and Tobago',
    'objectid': 'lfLdfRP7hyiA6MVnQqqn'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '12', 'recovered': '0', 'sick': '12', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '12',
      'recovered': '0',
      'sick': '12',
      'time': 1584810002408
    }],
    'id': '9cb121bf-0af2-4afc-8eea-53347a5aa316',
    'lastUpdated': '2020-03-21T16:42:03.004Z',
    'latitude': '64.2008',
    'longitude': '-149.4937',
    'name': 'Alaska',
    'objectid': 'YaCODTMD1KKRnrAlkg2u'
  }, {
    'country': 'XK',
    'dataHistories': [{'dead': '0', 'infected': '24', 'recovered': '0', 'sick': '24', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '24',
      'recovered': '0',
      'sick': '24',
      'time': 1584810002408
    }],
    'id': 'bdceea1a-1b64-49dc-a252-50eb6e4f80f9',
    'lastUpdated': '2020-03-21T16:29:01.616Z',
    'latitude': '42.6026',
    'longitude': '20.903',
    'name': 'Kosovo',
    'objectid': 'SMWvuMMuKp2QK7O2tNia'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '1', 'infected': '14', 'recovered': '0', 'sick': '13', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '14',
      'recovered': '0',
      'sick': '13',
      'time': 1584810002408
    }],
    'id': '960de163-9539-4321-a725-a609e065d2d6',
    'lastUpdated': '2020-03-21T13:49:04.746Z',
    'latitude': '31.1471',
    'longitude': '75.3412',
    'name': 'Punjab',
    'objectid': 'GGru8cG08mANO8XDDUtZ'
  }, {
    'country': 'HK',
    'dataHistories': [{'dead': '4', 'infected': '273', 'recovered': '98', 'sick': '171', 'time': 1584809582622}, {
      'dead': '4',
      'infected': '273',
      'recovered': '98',
      'sick': '171',
      'time': 1584810002408
    }],
    'id': 'b3e08448-1993-4a55-967f-910966d6f58a',
    'lastUpdated': '2020-03-21T16:43:02.898Z',
    'latitude': '22.396427',
    'longitude': '114.109497',
    'name': 'Hong Kong',
    'objectid': '6IcHIIH0zXpY0POmBZTv'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '56', 'infected': '8522', 'recovered': '0', 'sick': '8466', 'time': 1584809582622}, {
      'dead': '56',
      'infected': '8522',
      'recovered': '0',
      'sick': '8466',
      'time': 1584810002408
    }],
    'id': 'd8597443-95e1-430a-8727-fa9db6c0077c',
    'lastUpdated': '2020-03-21T16:42:02.838Z',
    'latitude': '40.719042',
    'longitude': '-73.982597',
    'name': 'New York',
    'objectid': 'C3BCUzV80z9GfiuByIcr'
  }, {
    'country': 'TZ',
    'dataHistories': [{'dead': '0', 'infected': '6', 'recovered': '0', 'sick': '6', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '6',
      'recovered': '0',
      'sick': '6',
      'time': 1584810002408
    }],
    'id': 'a35b6876-7c00-4ea9-a12b-a6a3b04b69f1',
    'lastUpdated': '2020-03-21T16:43:03.003Z',
    'latitude': '-6.369',
    'longitude': '34.8888',
    'name': 'Tanzania',
    'objectid': 'mnew3ojzmWV0dWSPfCQ9'
  }, {
    'country': 'NL',
    'dataHistories': [{'dead': '136', 'infected': '3631', 'recovered': '2', 'sick': '3493', 'time': 1584809582622}, {
      'dead': '136',
      'infected': '3631',
      'recovered': '2',
      'sick': '3493',
      'time': 1584810002408
    }],
    'id': 'ae4a3874-978d-458b-b5c5-c9bb17aeb0d3',
    'lastUpdated': '2020-03-21T16:43:02.729Z',
    'latitude': '52.132633',
    'longitude': '5.291266',
    'name': 'Netherlands',
    'objectid': 'g0lRMtEJbucWIGqSPn0I'
  }, {
    'country': 'PF',
    'dataHistories': [{'dead': '0', 'infected': '15', 'recovered': '0', 'sick': '15', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '15',
      'recovered': '0',
      'sick': '15',
      'time': 1584810002408
    }],
    'id': 'e165c218-d6f2-4a6b-8475-8dde592c4251',
    'lastUpdated': '2020-03-21T16:43:02.932Z',
    'latitude': '-17.6797',
    'longitude': '-149.4068',
    'name': 'Polynésie française',
    'objectid': 'yOfFKDRrscqcZ85WMRqF'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '1', 'infected': '75', 'recovered': '74', 'sick': '0', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '75',
      'recovered': '74',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': 'afb416e5-3ebb-4732-9734-78ac69ea1e29',
    'lastUpdated': '2020-03-21T07:53:27.218Z',
    'latitude': '42.83263',
    'longitude': '113.750972',
    'name': 'Inner Mongolia',
    'objectid': 'H3JeVigVbo5CSYfZG4WI'
  }, {
    'country': 'TW',
    'dataHistories': [{'dead': '2', 'infected': '153', 'recovered': '28', 'sick': '123', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '153',
      'recovered': '28',
      'sick': '123',
      'time': 1584810002408
    }],
    'id': 'c284d180-730d-493d-b4bc-b74223d0c559',
    'lastUpdated': '2020-03-21T16:43:02.705Z',
    'latitude': '25.03841',
    'longitude': '121.563698',
    'name': 'Taiwan',
    'objectid': 'EKTfs8e7M6DXzI1HqyyX'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '0', 'infected': '182', 'recovered': '0', 'sick': '182', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '182',
      'recovered': '0',
      'sick': '182',
      'time': 1584810002408
    }],
    'id': '9f24cd87-6d0c-4e18-9e17-956260a98d33',
    'lastUpdated': '2020-03-21T16:42:03.237Z',
    'latitude': '53.6127',
    'longitude': '12.4296',
    'name': 'Mecklenburg-Vorpommern',
    'objectid': 'He1gSS1v50t06i3YrqvB'
  }, {
    'country': 'CM',
    'dataHistories': [{'dead': '0', 'infected': '27', 'recovered': '2', 'sick': '25', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '27',
      'recovered': '2',
      'sick': '25',
      'time': 1584810002408
    }],
    'id': 'b734e1f1-29a8-4963-a581-bdd3b2c840e5',
    'lastUpdated': '2020-03-21T16:43:02.939Z',
    'latitude': '7.3697',
    'longitude': '12.3547',
    'name': 'Cameroon',
    'objectid': '8C0d7WVCjyUGtnc2gUAR'
  }, {
    'country': 'MN',
    'dataHistories': [{'dead': '0', 'infected': '10', 'recovered': '0', 'sick': '10', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '10',
      'recovered': '0',
      'sick': '10',
      'time': 1584810002408
    }],
    'id': 'e5df15c9-2991-4b76-99a4-971225768140',
    'lastUpdated': '2020-03-21T16:43:03.005Z',
    'latitude': '46.8625',
    'longitude': '103.8467',
    'name': 'Mongolia',
    'objectid': 'cPxONYsVo6BgvCW9HUeQ'
  }, {
    'country': 'FO',
    'dataHistories': [{'dead': '0', 'infected': '92', 'recovered': '3', 'sick': '89', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '92',
      'recovered': '3',
      'sick': '89',
      'time': 1584810002408
    }],
    'id': 'aa4da0b3-47ea-4861-91fc-6611e4da6924',
    'lastUpdated': '2020-03-21T16:43:02.745Z',
    'latitude': '61.8926',
    'longitude': '-6.9118',
    'name': 'Faeroe Islands',
    'objectid': 'cgzd5EM8PZv5ziJtTz1w'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '0', 'infected': '219', 'recovered': '0', 'sick': '219', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '219',
      'recovered': '0',
      'sick': '219',
      'time': 1584810002408
    }],
    'id': 'afac9a6c-1ae2-4bb6-9e0c-b6f640ac4056',
    'lastUpdated': '2020-03-21T16:34:06.531Z',
    'latitude': '47.7516',
    'longitude': '1.6751',
    'name': 'Centre-Val de Loire',
    'objectid': '2sLNkkHpyaHx7dD3aMDO'
  }, {
    'country': 'SI',
    'dataHistories': [{'dead': '1', 'infected': '383', 'recovered': '0', 'sick': '382', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '383',
      'recovered': '0',
      'sick': '382',
      'time': 1584810002408
    }],
    'id': 'e9c9f9cd-be31-4598-a355-711cc73f9940',
    'lastUpdated': '2020-03-21T16:43:02.659Z',
    'latitude': '46.0569',
    'longitude': '14.5058',
    'name': 'Slovenia',
    'objectid': '6ahNiyKDSDAftCctgLH3'
  }, {
    'country': 'CI',
    'dataHistories': [{'dead': '0', 'infected': '14', 'recovered': '1', 'sick': '13', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '14',
      'recovered': '1',
      'sick': '13',
      'time': 1584810002408
    }],
    'id': 'bb11840a-fbc2-4123-a720-9b99bc8a1dd6',
    'lastUpdated': '2020-03-21T16:43:03.072Z',
    'latitude': '7.54',
    'longitude': '-5.5471',
    'name': 'Ivory Coast',
    'objectid': 'MdQOfc1gNh2DOqwSP6UV'
  }, {
    'country': 'HN',
    'dataHistories': [{'dead': '0', 'infected': '24', 'recovered': '0', 'sick': '24', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '24',
      'recovered': '0',
      'sick': '24',
      'time': 1584810002408
    }],
    'id': 'c6284fe5-92d7-41ce-8537-27b6f6ef37bb',
    'lastUpdated': '2020-03-21T16:43:02.937Z',
    'latitude': '15.2',
    'longitude': '-86.2419',
    'name': 'Honduras',
    'objectid': 'RA2SE0p2bVhqo0P2hzGY'
  }, {
    'country': 'BS',
    'dataHistories': [{'dead': '0', 'infected': '4', 'recovered': '0', 'sick': '4', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '4',
      'recovered': '0',
      'sick': '4',
      'time': 1584810002408
    }],
    'id': 'a0b02475-c457-4f7f-a0fc-25f65cafec24',
    'lastUpdated': '2020-03-21T16:43:02.980Z',
    'latitude': '25.025885',
    'longitude': '-78.035889',
    'name': 'Bahamas',
    'objectid': '5MHegCUO9L3LiAU7DDey'
  }, {
    'country': 'ES',
    'dataHistories': [{'dead': '1378', 'infected': '25374', 'recovered': '2125', 'sick': '21871', 'time': 1584809582622}, {
      'dead': '1378',
      'infected': '25374',
      'recovered': '2125',
      'sick': '21871',
      'time': 1584810002408
    }],
    'id': 'c0535f54-da42-4763-95b7-63230acbbf8d',
    'lastUpdated': '2020-03-21T16:43:02.584Z',
    'latitude': '40.463669',
    'longitude': '-3.74922',
    'name': 'Spain',
    'objectid': 'd0ExINgPaWUBm3l4ioJL'
  }, {
    'country': 'KW',
    'dataHistories': [{'dead': '0', 'infected': '176', 'recovered': '27', 'sick': '149', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '176',
      'recovered': '27',
      'sick': '149',
      'time': 1584810002408
    }],
    'id': 'ecb82959-66df-412d-b367-17794b52bdf1',
    'lastUpdated': '2020-03-21T16:43:02.663Z',
    'latitude': '29.311661',
    'longitude': '47.481766',
    'name': 'Kuwait',
    'objectid': 'FZsUkhxBEgqsPb4eO0PN'
  }, {
    'country': 'MO',
    'dataHistories': [{'dead': '0', 'infected': '18', 'recovered': '10', 'sick': '8', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '18',
      'recovered': '10',
      'sick': '8',
      'time': 1584810002408
    }],
    'id': 'ad297f83-8a18-462e-9a09-05cfb30498da',
    'lastUpdated': '2020-03-21T16:43:03.026Z',
    'latitude': '22.192039',
    'longitude': '113.551262',
    'name': 'Macao',
    'objectid': 'DdBt8qsG6A3g92oOR3ow'
  }, {
    'country': 'MS',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': 'b4c74485-11fa-4038-86df-a93bf4220b67',
    'lastUpdated': '2020-03-21T16:43:03.027Z',
    'latitude': '16.7424984',
    'longitude': '-62.1873665',
    'name': 'Montserrat',
    'objectid': 'PEDkeFMTOZpvHiSVxBk7'
  }, {
    'country': 'AU',
    'dataHistories': [{'dead': '1', 'infected': '64', 'recovered': '0', 'sick': '63', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '64',
      'recovered': '0',
      'sick': '63',
      'time': 1584810002408
    }],
    'id': 'eda497fb-fbff-4cb0-8a9d-3f68cae45aa9',
    'lastUpdated': '2020-03-21T16:40:03.926Z',
    'latitude': '-26.190439',
    'longitude': '123.325947',
    'name': 'Western Australia',
    'objectid': 'qnQ0dkxAxnDP01YpdZgk'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '1', 'infected': '311', 'recovered': '0', 'sick': '310', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '311',
      'recovered': '0',
      'sick': '310',
      'time': 1584810002408
    }],
    'id': 'c00a7699-91d7-4ff9-bef8-044ba00cae05',
    'lastUpdated': '2020-03-21T16:42:03.000Z',
    'latitude': '41.2033',
    'longitude': '-77.1945',
    'name': 'Pennsylvania',
    'objectid': 'chj2FF3zb4Xxcop9RHre'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '4', 'recovered': '0', 'sick': '4', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '4',
      'recovered': '0',
      'sick': '4',
      'time': 1584810002408
    }],
    'id': 'cab9f325-2590-4cee-8363-aba3ec935879',
    'lastUpdated': '2020-03-21T16:34:03.495Z',
    'latitude': '22.9734',
    'longitude': '78.6569',
    'name': 'Madhya Pradesh',
    'objectid': '0s18o5DrDAHjbu5MFcrj'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '1', 'infected': '190', 'recovered': '4', 'sick': '185', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '190',
      'recovered': '4',
      'sick': '185',
      'time': 1584810002408
    }],
    'id': 'a7950d00-bbdd-41a9-bb3a-e50418ac8025',
    'lastUpdated': '2020-03-21T16:34:06.521Z',
    'latitude': '47.2184',
    'longitude': '-1.5536',
    'name': 'Pays de la Loire',
    'objectid': '98hwAoohgWEOQVa3NlM5'
  }, {
    'country': 'SD',
    'dataHistories': [{'dead': '1', 'infected': '2', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '2',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': 'c61fc59c-77e7-4cec-8d03-384b1e8b3c3a',
    'lastUpdated': '2020-03-21T16:43:02.958Z',
    'latitude': '12.8628',
    'longitude': '30.2176',
    'name': 'Sudan',
    'objectid': '9DPOkpIqrFy9mR4e9fuv'
  }, {
    'country': 'ZA',
    'dataHistories': [{'dead': '0', 'infected': '240', 'recovered': '2', 'sick': '238', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '240',
      'recovered': '2',
      'sick': '238',
      'time': 1584810002408
    }],
    'id': 'ef41407a-398e-4ed9-81ff-a42cc7e8ff08',
    'lastUpdated': '2020-03-21T16:43:02.713Z',
    'latitude': '-30.5595',
    'longitude': '22.9375',
    'name': 'South Africa',
    'objectid': 'Whrue10NtwIObLvFFyBr'
  }, {
    'country': 'AW',
    'dataHistories': [{'dead': '0', 'infected': '5', 'recovered': '1', 'sick': '4', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '5',
      'recovered': '1',
      'sick': '4',
      'time': 1584810002408
    }],
    'id': 'b0e2b887-cf18-4260-960a-4d4f22166c94',
    'lastUpdated': '2020-03-21T16:43:03.073Z',
    'latitude': '12.5211',
    'longitude': '-69.9683',
    'name': 'Aruba',
    'objectid': 'rKbrli0DkAmp1UpbrqHQ'
  }, {
    'country': 'MY',
    'dataHistories': [{'dead': '8', 'infected': '1183', 'recovered': '114', 'sick': '1061', 'time': 1584809582622}, {
      'dead': '8',
      'infected': '1183',
      'recovered': '114',
      'sick': '1061',
      'time': 1584810002408
    }],
    'id': 'b681568f-3cde-4a23-ac1a-543ad3779515',
    'lastUpdated': '2020-03-21T16:43:02.639Z',
    'latitude': '3.139',
    'longitude': '101.6869',
    'name': 'Malaysia',
    'objectid': 'bdqD4kpdqGgUaX70Tm2Q'
  }, {
    'country': 'MR',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'f08894eb-18fd-4284-ad3d-8d6b2f3afcbc',
    'lastUpdated': '2020-03-21T16:43:02.967Z',
    'latitude': '21.0079',
    'longitude': '-10.9408',
    'name': 'Mauritania',
    'objectid': '4NnFMekRK2m14IlnZZoj'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '17', 'recovered': '3', 'sick': '14', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '17',
      'recovered': '3',
      'sick': '14',
      'time': 1584810002408
    }],
    'id': 'c16523b2-8d99-4db1-a535-ea3a03167234',
    'lastUpdated': '2020-03-21T16:34:03.492Z',
    'latitude': '27.0238',
    'longitude': '74.2179',
    'name': 'Rajasthan',
    'objectid': 'CKZCZTPlrcq5fbfUPA9k'
  }, {
    'country': 'NP',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '1', 'sick': '0', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '1',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': 'd01296d8-2556-40ef-8e0c-0dcc1909d4d6',
    'lastUpdated': '2020-03-21T16:43:03.032Z',
    'latitude': '28.394857',
    'longitude': '84.124008',
    'name': 'Nepal',
    'objectid': '5gXZIjRgAvd6xWN1LOv8'
  }, {
    'country': 'BB',
    'dataHistories': [{'dead': '0', 'infected': '6', 'recovered': '0', 'sick': '6', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '6',
      'recovered': '0',
      'sick': '6',
      'time': 1584810002408
    }],
    'id': 'a9bb4afb-bf07-4beb-a652-0e8fd2415bdf',
    'lastUpdated': '2020-03-21T16:43:03.065Z',
    'latitude': '13.193887',
    'longitude': '-59.543198',
    'name': 'Barbados',
    'objectid': 'YzZqZMJGvG6joQCdiuXC'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '0', 'infected': '133', 'recovered': '133', 'sick': '0', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '133',
      'recovered': '133',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': 'd14cdf66-f0e8-4799-9364-4efbc60ed302',
    'lastUpdated': '2020-03-21T07:53:32.252Z',
    'latitude': '37.242565',
    'longitude': '111.856857',
    'name': 'Shanxi',
    'objectid': 'NBRIGIRrJB1Ry8prDNAC'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '21', 'infected': '3695', 'recovered': '15', 'sick': '3659', 'time': 1584809582622}, {
      'dead': '21',
      'infected': '3695',
      'recovered': '15',
      'sick': '3659',
      'time': 1584810002408
    }],
    'id': 'f99b0311-2480-4dbd-b5f8-ce2af8a29535',
    'lastUpdated': '2020-03-21T16:42:03.326Z',
    'latitude': '48.7904',
    'longitude': '11.4979',
    'name': 'Bayern',
    'objectid': '7kCrrlOBE3jN6FtOVNUB'
  }, {
    'country': 'RO',
    'dataHistories': [{'dead': '0', 'infected': '367', 'recovered': '52', 'sick': '315', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '367',
      'recovered': '52',
      'sick': '315',
      'time': 1584810002408
    }],
    'id': 'b2ad7412-417e-4ba3-9893-84bde43cbbc4',
    'lastUpdated': '2020-03-21T16:43:02.666Z',
    'latitude': '45.943161',
    'longitude': '24.966761',
    'name': 'Romania',
    'objectid': '9QcETqEcM2fTv9zRvx5T'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '0', 'infected': '3', 'recovered': '0', 'sick': '3', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '3',
      'recovered': '0',
      'sick': '3',
      'time': 1584810002408
    }],
    'id': 'cb5d0f90-8b84-4741-9ea1-d68ea5c5fa51',
    'lastUpdated': '2020-03-21T12:58:03.976Z',
    'latitude': '17.901672',
    'longitude': '-62.818544',
    'name': 'Saint-Barthélemy',
    'objectid': '78Ox26bNHDA2Pk2b3Uwn'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '5', 'infected': '429', 'recovered': '0', 'sick': '424', 'time': 1584809582622}, {
      'dead': '5',
      'infected': '429',
      'recovered': '0',
      'sick': '424',
      'time': 1584810002408
    }],
    'id': 'f15dd3f0-b783-4d73-bc24-3aee0ee78cf4',
    'lastUpdated': '2020-03-21T16:42:03.067Z',
    'latitude': '31',
    'longitude': '-100',
    'name': 'Texas',
    'objectid': 'qsrWiq0qCmIG66hpWojP'
  }, {
    'country': 'SA',
    'dataHistories': [{'dead': '0', 'infected': '392', 'recovered': '16', 'sick': '376', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '392',
      'recovered': '16',
      'sick': '376',
      'time': 1584810002408
    }],
    'id': 'c347a64f-1929-4146-b654-943e49ef5ee3',
    'lastUpdated': '2020-03-21T16:43:02.720Z',
    'latitude': '23.635796',
    'longitude': '44.344334',
    'name': 'Saudi Arabia',
    'objectid': 'T7NffoeCgTUpAbOHvYwP'
  }, {
    'country': 'SX',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': 'd5420295-761a-44ef-b267-5603b0bf7844',
    'lastUpdated': '2020-03-21T16:43:03.015Z',
    'latitude': '18.0424805',
    'longitude': '-63.0548286',
    'name': 'Sint Maarten',
    'objectid': 'UsxgpiuFCtlR2CW1UUFm'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '20', 'infected': '770', 'recovered': '8', 'sick': '742', 'time': 1584809582622}, {
      'dead': '20',
      'infected': '770',
      'recovered': '8',
      'sick': '742',
      'time': 1584810002408
    }],
    'id': 'b34238c8-c618-48fe-800f-c2acf1e4d15b',
    'lastUpdated': '2020-03-21T16:34:06.517Z',
    'latitude': '47.2805',
    'longitude': '4.9994',
    'name': 'Bourgogne-Franche-Comté',
    'objectid': 'ejrjMKfHexGnK52FS9Aa'
  }, {
    'country': 'PR',
    'dataHistories': [{'dead': '0', 'infected': '17', 'recovered': '0', 'sick': '17', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '17',
      'recovered': '0',
      'sick': '17',
      'time': 1584810002408
    }],
    'id': 'd84380ee-03b5-446c-bc1d-bf2d8251a510',
    'lastUpdated': '2020-03-21T16:43:03.008Z',
    'latitude': '18.200178',
    'longitude': '-66.664513',
    'name': 'Puerto Rico',
    'objectid': 'F4rPrEVGAIMM5rfPEMv4'
  }, {
    'country': 'KY',
    'dataHistories': [{'dead': '1', 'infected': '3', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '3',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'b78cbb27-0c74-49f3-9961-4911b81b5c4f',
    'lastUpdated': '2020-03-21T16:43:02.994Z',
    'latitude': '19.3133',
    'longitude': '-81.2546',
    'name': 'Cayman Islands',
    'objectid': 'P4mwRFLbrvT0t75uD8Wo'
  }, {
    'country': 'FI',
    'dataHistories': [{'dead': '1', 'infected': '521', 'recovered': '10', 'sick': '510', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '521',
      'recovered': '10',
      'sick': '510',
      'time': 1584810002408
    }],
    'id': 'cb60246f-24b8-45a3-98b1-fa1b9fe3120a',
    'lastUpdated': '2020-03-21T16:43:02.627Z',
    'latitude': '61.92411',
    'longitude': '25.748152',
    'name': 'Finland',
    'objectid': '9p6OCdZbUUwBLA60Gk3W'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '2', 'infected': '146', 'recovered': '144', 'sick': '0', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '146',
      'recovered': '144',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': 'c7e5c8ec-a83d-4cf0-861b-6d173fb2e4b3',
    'lastUpdated': '2020-03-21T07:53:21.229Z',
    'latitude': '26.842964',
    'longitude': '107.290283',
    'name': 'Guizhou',
    'objectid': 'tyY4QSHWG9sXqSO9jm0Y'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '6', 'infected': '318', 'recovered': '310', 'sick': '2', 'time': 1584809582622}, {
      'dead': '6',
      'infected': '318',
      'recovered': '310',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'd5b461fe-887a-4018-bcee-a82ee7d24685',
    'lastUpdated': '2020-03-21T07:54:05.368Z',
    'latitude': '37.89566',
    'longitude': '114.904221',
    'name': 'Hebei',
    'objectid': 'sgsBhTwHxF1VVnqXbXXp'
  }, {
    'country': 'DE',
    'dataHistories': [{'dead': '1', 'infected': '868', 'recovered': '6', 'sick': '861', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '868',
      'recovered': '6',
      'sick': '861',
      'time': 1584810002408
    }],
    'id': 'b75ce697-4304-4c53-9806-9779648d424a',
    'lastUpdated': '2020-03-21T16:42:03.340Z',
    'latitude': '52.52',
    'longitude': '13.405',
    'name': 'Berlin',
    'objectid': 'ffKhENYKy3bwsyBLiYtE'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '2', 'infected': '64', 'recovered': '0', 'sick': '62', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '64',
      'recovered': '0',
      'sick': '62',
      'time': 1584810002408
    }],
    'id': 'e0b8d68f-014e-4cd8-8bba-fd027ea1eed9',
    'lastUpdated': '2020-03-21T16:42:02.900Z',
    'latitude': '37.8393',
    'longitude': '-84.27',
    'name': 'Kentucky',
    'objectid': 'MC8MXFw9iXYybnF8v7e6'
  }, {
    'country': 'SN',
    'dataHistories': [{'dead': '0', 'infected': '47', 'recovered': '5', 'sick': '42', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '47',
      'recovered': '5',
      'sick': '42',
      'time': 1584810002408
    }],
    'id': 'f578a27b-ca4a-49e2-9935-589b68248686',
    'lastUpdated': '2020-03-21T16:43:02.642Z',
    'latitude': '14.457474',
    'longitude': '-14.358636',
    'name': 'Senegal',
    'objectid': 'b9p1JhVml3GGC7iiPmKv'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '1', 'infected': '413', 'recovered': '0', 'sick': '412', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '413',
      'recovered': '0',
      'sick': '412',
      'time': 1584810002408
    }],
    'id': 'b92d3f16-8446-46fe-91f3-73547f2924e3',
    'lastUpdated': '2020-03-21T16:42:02.865Z',
    'latitude': '42.407211',
    'longitude': '-71.382439',
    'name': 'Massachusetts',
    'objectid': 'eCKDGssww4pF7NrxOySu'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '0', 'infected': '7', 'recovered': '0', 'sick': '7', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '7',
      'recovered': '0',
      'sick': '7',
      'time': 1584810002408
    }],
    'id': 'd11e38b0-3e31-42b4-9515-a7232bd36c92',
    'lastUpdated': '2020-03-21T16:43:03.067Z',
    'latitude': '-12.8275',
    'longitude': '45.1662',
    'name': 'Mayotte',
    'objectid': 'rUQ6Z3pmWTPVlqEUSmN7'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '0', 'infected': '45', 'recovered': '0', 'sick': '45', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '45',
      'recovered': '0',
      'sick': '45',
      'time': 1584810002408
    }],
    'id': 'c7fd438f-80a3-45ff-a960-aef9a0045d45',
    'lastUpdated': '2020-03-21T13:19:11.242Z',
    'latitude': '-21.1151',
    'longitude': '55.5364',
    'name': 'La Réunion',
    'objectid': 'SgHzWAAYK1j2sipovxM6'
  }, {
    'country': 'AU',
    'dataHistories': [{'dead': '0', 'infected': '0', 'recovered': '23', 'sick': '0', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '0',
      'recovered': '23',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': 'dc621197-eea0-4574-b393-4d6c171ae7ac',
    'lastUpdated': '2020-03-19T02:03:51.485Z',
    'latitude': '-25.2744',
    'longitude': '133.7751',
    'name': 'Unknown state',
    'objectid': 'iwcBlwhnL6MDiXogzf8g'
  }, {
    'country': 'AZ',
    'dataHistories': [{'dead': '1', 'infected': '53', 'recovered': '11', 'sick': '41', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '53',
      'recovered': '11',
      'sick': '41',
      'time': 1584810002408
    }],
    'id': 'b7be60c8-7f6f-4bcf-831b-7e37c7ab5f83',
    'lastUpdated': '2020-03-21T16:43:02.648Z',
    'latitude': '40.3426',
    'longitude': '47.93802',
    'name': 'Azerbaijan',
    'objectid': '4zqzRm2xHn0CDVOUQJ8p'
  }, {
    'country': 'AU',
    'dataHistories': [{'dead': '0', 'infected': '6', 'recovered': '0', 'sick': '6', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '6',
      'recovered': '0',
      'sick': '6',
      'time': 1584810002408
    }],
    'id': 'e90e53a2-f6d2-428a-85c8-09b4aed6a9dc',
    'lastUpdated': '2020-03-21T16:40:04.029Z',
    'latitude': '-35.4735',
    'longitude': '149.0124',
    'name': 'Australian Capital Territory',
    'objectid': '3OZoQsKrzxZ18EKyfGE6'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '273', 'infected': '0', 'recovered': '0', 'sick': '0', 'time': 1584809582622}, {
      'dead': '273',
      'infected': '0',
      'recovered': '0',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': 'f7c924a0-efe5-4eb4-a9e9-4cba0a4bca81',
    'lastUpdated': '2020-03-20T18:35:43.377Z',
    'latitude': '47',
    'longitude': '2',
    'name': 'Région non communiquée',
    'objectid': 'fIp76gl05LhZ0aOxUbhz'
  }, {
    'country': 'GU',
    'dataHistories': [{'dead': '0', 'infected': '15', 'recovered': '0', 'sick': '15', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '15',
      'recovered': '0',
      'sick': '15',
      'time': 1584810002408
    }],
    'id': 'c887d880-c2e6-407e-9cc2-4378676ecb31',
    'lastUpdated': '2020-03-21T16:43:03.022Z',
    'latitude': '13.4443',
    'longitude': '144.7937',
    'name': 'Guam',
    'objectid': 'SsWhuEElU7dCTTuH5fdQ'
  }, {
    'country': 'SO',
    'dataHistories': [{'dead': '0', 'infected': '1', 'recovered': '0', 'sick': '1', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '1',
      'recovered': '0',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': 'd74ae4fb-55de-4e12-8ca4-5dfc58911b6e',
    'lastUpdated': '2020-03-21T16:43:03.006Z',
    'latitude': '2.046934',
    'longitude': '45.318161',
    'name': 'Somalia',
    'objectid': 'pHrUAOBW5WDdMsVWpEEi'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '6', 'infected': '168', 'recovered': '161', 'sick': '1', 'time': 1584809582622}, {
      'dead': '6',
      'infected': '168',
      'recovered': '161',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': 'cbc0ab63-4d48-4c19-96dc-805a3b4763da',
    'lastUpdated': '2020-03-21T07:54:27.132Z',
    'latitude': '19.566395',
    'longitude': '109.949684',
    'name': 'Hainan',
    'objectid': 'sKNhMvgXeyivpNFg02RA'
  }, {
    'country': 'EC',
    'dataHistories': [{'dead': '7', 'infected': '426', 'recovered': '3', 'sick': '416', 'time': 1584809582622}, {
      'dead': '7',
      'infected': '426',
      'recovered': '3',
      'sick': '416',
      'time': 1584810002408
    }],
    'id': 'e1d6a191-b9fc-49e0-9107-6b9a3bd96b08',
    'lastUpdated': '2020-03-21T16:43:02.899Z',
    'latitude': '-1.831239',
    'longitude': '-78.183403',
    'name': 'Ecuador',
    'objectid': 'zC03Urt1iJJb2Tf6p0jd'
  }, {
    'country': 'LC',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'b9d62d74-e249-4209-a96a-d31ff8f27fa6',
    'lastUpdated': '2020-03-21T16:43:03.012Z',
    'latitude': '13.909444',
    'longitude': '-60.978893',
    'name': 'Saint Lucia',
    'objectid': 'PjLqCeFdyzdZNcZxMkK1'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '3', 'infected': '114', 'recovered': '0', 'sick': '111', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '114',
      'recovered': '0',
      'sick': '111',
      'time': 1584810002408
    }],
    'id': 'ec755105-0df0-440f-a107-896a50638cd1',
    'lastUpdated': '2020-03-21T16:42:03.088Z',
    'latitude': '43.807191',
    'longitude': '-120.585594',
    'name': 'Oregon',
    'objectid': '2OrsssmGUs4XCzaZzvTv'
  }, {
    'country': 'QA',
    'dataHistories': [{'dead': '0', 'infected': '470', 'recovered': '10', 'sick': '460', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '470',
      'recovered': '10',
      'sick': '460',
      'time': 1584810002408
    }],
    'id': 'f84a6ee2-90c1-42a0-be2b-458391ef1732',
    'lastUpdated': '2020-03-21T16:43:02.726Z',
    'latitude': '25.315058',
    'longitude': '51.145517',
    'name': 'Qatar',
    'objectid': '0m4aECS0Z2DGFEr8ldgI'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '2', 'infected': '134', 'recovered': '113', 'sick': '19', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '134',
      'recovered': '113',
      'sick': '19',
      'time': 1584810002408
    }],
    'id': 'd0a5659b-897a-41bc-9d56-8f9b79543517',
    'lastUpdated': '2020-03-21T07:54:43.659Z',
    'latitude': '35.751835',
    'longitude': '104.28611',
    'name': 'Gansu',
    'objectid': 'iGkTscdD0XyHFSP23Qrp'
  }, {
    'country': 'LV',
    'dataHistories': [{'dead': '0', 'infected': '124', 'recovered': '1', 'sick': '123', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '124',
      'recovered': '1',
      'sick': '123',
      'time': 1584810002408
    }],
    'id': 'd966a74f-7193-4d93-b055-27866f3a31c1',
    'lastUpdated': '2020-03-21T16:43:02.742Z',
    'latitude': '56.96776',
    'longitude': '25.837107',
    'name': 'Latvia',
    'objectid': 'NmmMKy0YqA8StHdGzB5N'
  }, {
    'country': 'JO',
    'dataHistories': [{'dead': '0', 'infected': '85', 'recovered': '1', 'sick': '84', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '85',
      'recovered': '1',
      'sick': '84',
      'time': 1584810002408
    }],
    'id': 'ce139a0c-9691-4c73-8430-41478514bf57',
    'lastUpdated': '2020-03-21T16:43:02.635Z',
    'latitude': '31.295929',
    'longitude': '36.691952',
    'name': 'Jordan',
    'objectid': 'fK06AziL8wyrcoz7rsmJ'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '6', 'infected': '990', 'recovered': '984', 'sick': '0', 'time': 1584809582622}, {
      'dead': '6',
      'infected': '990',
      'recovered': '984',
      'sick': '0',
      'time': 1584810002408
    }],
    'id': 'e1ea89c4-4b46-4c3b-97b4-7cb245c38471',
    'lastUpdated': '2020-03-21T07:55:45.608Z',
    'latitude': '32.026379',
    'longitude': '117.252747',
    'name': 'Anhui',
    'objectid': 'pFhBwPnGGpQ6DLppJ6YS'
  }, {
    'country': 'CA',
    'dataHistories': [{'dead': '0', 'infected': '17', 'recovered': '0', 'sick': '17', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '17',
      'recovered': '0',
      'sick': '17',
      'time': 1584810002408
    }],
    'id': 'bb11328e-5952-432e-b91b-f70954799b65',
    'lastUpdated': '2020-03-21T16:42:03.221Z',
    'latitude': '53.7609',
    'longitude': '-98.8139',
    'name': 'Manitoba',
    'objectid': 'wCnlOr8oX3DlF0otQrFc'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '7', 'recovered': '0', 'sick': '7', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '7',
      'recovered': '0',
      'sick': '7',
      'time': 1584810002408
    }],
    'id': 'f300d060-4e13-4fa1-8b01-55467f6d5a5b',
    'lastUpdated': '2020-03-21T16:34:03.532Z',
    'latitude': '22.2587',
    'longitude': '71.1924',
    'name': 'Gujarat',
    'objectid': 'ERwk9R9en4m9WbdoMbIg'
  }, {
    'country': 'CA',
    'dataHistories': [{'dead': '1', 'infected': '195', 'recovered': '0', 'sick': '194', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '195',
      'recovered': '0',
      'sick': '194',
      'time': 1584810002408
    }],
    'id': 'df43bcc3-ac4c-401f-8f28-ad72f882a21c',
    'lastUpdated': '2020-03-21T16:42:02.904Z',
    'latitude': '53.9333',
    'longitude': '-116.5765',
    'name': 'Alberta',
    'objectid': 'sBFMOzZJdrdXdyLZpweO'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '1', 'infected': '303', 'recovered': '295', 'sick': '7', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '303',
      'recovered': '295',
      'sick': '7',
      'time': 1584810002408
    }],
    'id': 'e7451d71-5396-4df7-9245-a55caf9ee0d3',
    'lastUpdated': '2020-03-21T07:55:20.659Z',
    'latitude': '25.92448',
    'longitude': '118.278992',
    'name': 'Fujian',
    'objectid': 'XBBw0iMPrmiEu3qogkbi'
  }, {
    'country': 'AM',
    'dataHistories': [{'dead': '0', 'infected': '160', 'recovered': '1', 'sick': '159', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '160',
      'recovered': '1',
      'sick': '159',
      'time': 1584810002408
    }],
    'id': 'e876906a-490f-4ba8-8533-613fbacf7daf',
    'lastUpdated': '2020-03-21T16:43:02.673Z',
    'latitude': '40.259003',
    'longitude': '44.818474',
    'name': 'Armenia',
    'objectid': 'DCJCtZoBTWQ4mzdDNljD'
  }, {
    'country': 'GQ',
    'dataHistories': [{'dead': '0', 'infected': '6', 'recovered': '0', 'sick': '6', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '6',
      'recovered': '0',
      'sick': '6',
      'time': 1584810002408
    }],
    'id': 'c111a79f-9f67-4237-a165-3f1f1c9ecd73',
    'lastUpdated': '2020-03-21T16:43:03.068Z',
    'latitude': '1.6508009',
    'longitude': '10.2678947',
    'name': 'Equatorial Guinea',
    'objectid': 'rS04qvFoAknfeZsL2w5f'
  }, {
    'country': 'PK',
    'dataHistories': [{'dead': '3', 'infected': '720', 'recovered': '13', 'sick': '704', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '720',
      'recovered': '13',
      'sick': '704',
      'time': 1584810002408
    }],
    'id': 'ffde1083-9161-48db-807d-8a079016cf41',
    'lastUpdated': '2020-03-21T16:43:02.892Z',
    'latitude': '30.37532',
    'longitude': '69.345116',
    'name': 'Pakistan',
    'objectid': 'GAp7Wb6IMhdgbvEtMza9'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '3', 'infected': '137', 'recovered': '133', 'sick': '1', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '137',
      'recovered': '133',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': 'e17582e2-3dc1-4756-905e-a64d8640a8f0',
    'lastUpdated': '2020-03-21T07:54:10.231Z',
    'latitude': '39.343357',
    'longitude': '117.361649',
    'name': 'Tianjin',
    'objectid': 'jMlHjIOb7eMPSxFBrmG1'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '13', 'recovered': '0', 'sick': '13', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '13',
      'recovered': '0',
      'sick': '13',
      'time': 1584810002408
    }],
    'id': 'e9dd2b18-d57e-4c50-967c-6f83e783ec3e',
    'lastUpdated': '2020-03-21T16:34:03.455Z',
    'latitude': '34.152588',
    'longitude': '77.577049',
    'name': 'Ladakh',
    'objectid': 'X3PZqaJxtnlxcgP4tzya'
  }, {
    'country': 'TR',
    'dataHistories': [{'dead': '9', 'infected': '670', 'recovered': '0', 'sick': '661', 'time': 1584809582622}, {
      'dead': '9',
      'infected': '670',
      'recovered': '0',
      'sick': '661',
      'time': 1584810002408
    }],
    'id': 'e860b394-1382-4b53-8171-a0bb7573772f',
    'lastUpdated': '2020-03-21T16:43:02.699Z',
    'latitude': '38.9637',
    'longitude': '35.2433',
    'name': 'Turkey',
    'objectid': 'dzIcCaUZlbIXuRw0SyDE'
  }, {
    'country': 'LK',
    'dataHistories': [{'dead': '0', 'infected': '77', 'recovered': '3', 'sick': '74', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '77',
      'recovered': '3',
      'sick': '74',
      'time': 1584810002408
    }],
    'id': 'f209b80a-4fb0-4aba-a250-a8d63195a71f',
    'lastUpdated': '2020-03-21T16:43:02.738Z',
    'latitude': '7.873054',
    'longitude': '80.771797',
    'name': 'Sri Lanka',
    'objectid': 'KsWzJO06cf0d6LJ4ZNh9'
  }, {
    'country': 'AO',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'd01017d4-1042-428b-87a3-0bbe1c0f126f',
    'lastUpdated': '2020-03-21T16:43:03.025Z',
    'latitude': '-11.2027',
    'longitude': '17.8739',
    'name': 'Angola',
    'objectid': 'UIbrFy6kiTTF0D37Kqmp'
  }, {
    'country': 'FR',
    'dataHistories': [{'dead': '46', 'infected': '759', 'recovered': '0', 'sick': '713', 'time': 1584809582622}, {
      'dead': '46',
      'infected': '759',
      'recovered': '0',
      'sick': '713',
      'time': 1584810002408
    }],
    'id': 'ea0da652-b626-417e-a065-ad1a1f466251',
    'lastUpdated': '2020-03-21T16:34:06.529Z',
    'latitude': '50.4801',
    'longitude': '2.7937',
    'name': 'Hauts-de-France',
    'objectid': 'ofWLu9EuQoK2nHjwU1mA'
  }, {
    'country': 'GL',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'ee5c7d53-6b70-49b8-ae0e-ee18afe137fb',
    'lastUpdated': '2020-03-21T16:43:02.973Z',
    'latitude': '71.7069',
    'longitude': '-42.6043',
    'name': 'Greenland',
    'objectid': 'APaZzlGCEeuoLBtzTJMe'
  }, {
    'country': 'VN',
    'dataHistories': [{'dead': '0', 'infected': '94', 'recovered': '17', 'sick': '77', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '94',
      'recovered': '17',
      'sick': '77',
      'time': 1584810002408
    }],
    'id': 'f222fb63-b694-4355-8787-f90d604b8632',
    'lastUpdated': '2020-03-21T16:43:02.646Z',
    'latitude': '14.058324',
    'longitude': '108.277199',
    'name': 'Vietnam',
    'objectid': 'rKnSEyG03ak4YmGzonlg'
  }, {
    'country': 'BJ',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'd02e9bfd-361b-42d7-9498-9da971a7d61f',
    'lastUpdated': '2020-03-21T16:43:02.935Z',
    'latitude': '9.3077',
    'longitude': '2.3158',
    'name': 'Benin',
    'objectid': '6SlpghTyB6lpMFvx3g9U'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '26', 'recovered': '0', 'sick': '26', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '26',
      'recovered': '0',
      'sick': '26',
      'time': 1584810002408
    }],
    'id': 'f1999ce4-48c1-4797-acb8-90218bf7497a',
    'lastUpdated': '2020-03-21T16:42:02.852Z',
    'latitude': '47.5515',
    'longitude': '-101.002',
    'name': 'North Dakota',
    'objectid': 'xQpNodSQfHNHAtG9Onnj'
  }, {
    'country': 'GY',
    'dataHistories': [{'dead': '1', 'infected': '15', 'recovered': '0', 'sick': '14', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '15',
      'recovered': '0',
      'sick': '14',
      'time': 1584810002408
    }],
    'id': 'f2876ca0-e38f-47de-af54-6e35406d5216',
    'lastUpdated': '2020-03-21T12:23:18.358Z',
    'latitude': '4.8604159',
    'longitude': '-58.9301796',
    'name': 'Guyana',
    'objectid': 'gXd2X2PjmGP0XVwxpWqT'
  }, {
    'country': 'NC',
    'dataHistories': [{'dead': '0', 'infected': '4', 'recovered': '0', 'sick': '4', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '4',
      'recovered': '0',
      'sick': '4',
      'time': 1584810002408
    }],
    'id': 'fe9b36e3-eef7-4ceb-bc1d-6e8717c7784c',
    'lastUpdated': '2020-03-21T16:43:03.024Z',
    'latitude': '-20.9043045',
    'longitude': '165.618042',
    'name': 'New Caledonia',
    'objectid': '5fg04eyDwFw3kEXnrxez'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '0', 'infected': '106', 'recovered': '0', 'sick': '106', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '106',
      'recovered': '0',
      'sick': '106',
      'time': 1584810002408
    }],
    'id': 'f9c571a2-bf57-4b5f-b1b0-b7b64df6b4a6',
    'lastUpdated': '2020-03-21T16:42:02.988Z',
    'latitude': '32.3182',
    'longitude': '-86.9023',
    'name': 'Alabama',
    'objectid': 'vSMJR4m49MZM15umlC9B'
  }, {
    'country': 'CA',
    'dataHistories': [{'dead': '0', 'infected': '26', 'recovered': '0', 'sick': '26', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '26',
      'recovered': '0',
      'sick': '26',
      'time': 1584810002408
    }],
    'id': 'd1cb88d6-431b-4423-a0d5-fd5bfc87668c',
    'lastUpdated': '2020-03-21T16:42:02.793Z',
    'latitude': '52.9399',
    'longitude': '-106.4509',
    'name': 'Saskatchewan',
    'objectid': 'LkIDKY0CMAqzbwBHyYCP'
  }, {
    'country': 'GB',
    'dataHistories': [{'dead': '180', 'infected': '4094', 'recovered': '65', 'sick': '3849', 'time': 1584809582622}, {
      'dead': '180',
      'infected': '4094',
      'recovered': '65',
      'sick': '3849',
      'time': 1584810002408
    }],
    'id': 'f28d0909-0d1f-4192-a124-3f78e13cbde6',
    'lastUpdated': '2020-03-21T16:43:02.901Z',
    'latitude': '52.355518',
    'longitude': '-1.17432',
    'name': 'United Kingdom',
    'objectid': 'CrXu6i5Sqx11iwdfHfBs'
  }, {
    'country': 'UY',
    'dataHistories': [{'dead': '0', 'infected': '110', 'recovered': '0', 'sick': '110', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '110',
      'recovered': '0',
      'sick': '110',
      'time': 1584810002408
    }],
    'id': 'f6b358ab-8452-4755-b9d4-127d9e34b365',
    'lastUpdated': '2020-03-21T16:43:02.650Z',
    'latitude': '-32.5228',
    'longitude': '-55.7658',
    'name': 'Uruguay',
    'objectid': 'XrsuLstdybIqIvv0E0aJ'
  }, {
    'country': 'US',
    'dataHistories': [{'dead': '3', 'infected': '174', 'recovered': '0', 'sick': '171', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '174',
      'recovered': '0',
      'sick': '171',
      'time': 1584810002408
    }],
    'id': 'd5719804-5cfc-47e0-a4f5-a89cac41edba',
    'lastUpdated': '2020-03-21T16:42:03.118Z',
    'latitude': '40.4173',
    'longitude': '-82.9071',
    'name': 'Ohio',
    'objectid': '3fC3bAyIRUquOQOEnQNe'
  }, {
    'country': 'IN',
    'dataHistories': [{'dead': '0', 'infected': '2', 'recovered': '0', 'sick': '2', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '2',
      'recovered': '0',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'd639d931-e523-41f0-bb3f-0eb9d7ec00ed',
    'lastUpdated': '2020-03-21T16:34:03.519Z',
    'latitude': '31.1048',
    'longitude': '77.1734',
    'name': 'Himachal Pradesh',
    'objectid': 'oqLEd2Z9P3FJeQsfIk8e'
  }, {
    'country': 'BO',
    'dataHistories': [{'dead': '0', 'infected': '19', 'recovered': '0', 'sick': '19', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '19',
      'recovered': '0',
      'sick': '19',
      'time': 1584810002408
    }],
    'id': 'd7eff639-4d5e-4d1a-8c0b-efa5e9264e73',
    'lastUpdated': '2020-03-21T16:43:03.048Z',
    'latitude': '-16.2902',
    'longitude': '-63.5887',
    'name': 'Bolivia',
    'objectid': '8RihJrXw4NQXPxaRxr1u'
  }, {
    'country': 'VE',
    'dataHistories': [{'dead': '0', 'infected': '65', 'recovered': '1', 'sick': '64', 'time': 1584809582622}, {
      'dead': '0',
      'infected': '65',
      'recovered': '1',
      'sick': '64',
      'time': 1584810002408
    }],
    'id': 'd9546a22-cb2d-4879-b26a-f030ccd3a7be',
    'lastUpdated': '2020-03-21T16:43:02.728Z',
    'latitude': '6.4238',
    'longitude': '-66.5897',
    'name': 'Venezuela',
    'objectid': 'J3mZXlfEnnJx4CDZLvRG'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '2', 'infected': '254', 'recovered': '250', 'sick': '2', 'time': 1584809582622}, {
      'dead': '2',
      'infected': '254',
      'recovered': '250',
      'sick': '2',
      'time': 1584810002408
    }],
    'id': 'dd067fd4-03e2-40a3-bf24-99b70a58b1e2',
    'lastUpdated': '2020-03-21T07:55:15.540Z',
    'latitude': '23.64407',
    'longitude': '108.26651',
    'name': 'Guangxi',
    'objectid': 'aTa8MiBjtH3iY0SRs2HQ'
  }, {
    'country': 'AT',
    'dataHistories': [{'dead': '8', 'infected': '2814', 'recovered': '9', 'sick': '2797', 'time': 1584809582622}, {
      'dead': '8',
      'infected': '2814',
      'recovered': '9',
      'sick': '2797',
      'time': 1584810002408
    }],
    'id': 'e506ebb6-2259-411c-a8c0-95e911e3d9ff',
    'lastUpdated': '2020-03-21T16:43:02.739Z',
    'latitude': '47.516232',
    'longitude': '14.550072',
    'name': 'Austria',
    'objectid': 'e3BtI12qbqhE8jypOoZu'
  }, {
    'country': 'MU',
    'dataHistories': [{'dead': '1', 'infected': '14', 'recovered': '0', 'sick': '13', 'time': 1584809582622}, {
      'dead': '1',
      'infected': '14',
      'recovered': '0',
      'sick': '13',
      'time': 1584810002408
    }],
    'id': 'e6a79f85-b1be-47f7-9914-e2edc2ada504',
    'lastUpdated': '2020-03-21T16:43:02.957Z',
    'latitude': '-20.2067',
    'longitude': '57.6755',
    'name': 'Mauritius',
    'objectid': 'uZg9Xtu4zR5tp12TMpOQ'
  }, {
    'country': 'MA',
    'dataHistories': [{'dead': '3', 'infected': '86', 'recovered': '2', 'sick': '81', 'time': 1584809582622}, {
      'dead': '3',
      'infected': '86',
      'recovered': '2',
      'sick': '81',
      'time': 1584810002408
    }],
    'id': 'f67adb07-7898-43a1-882c-46616f5041c4',
    'lastUpdated': '2020-03-21T16:43:02.682Z',
    'latitude': '31.893778',
    'longitude': '-6.196132',
    'name': 'Morocco',
    'objectid': 'oJ5vSDE9vgXC2PG8LElp'
  }, {
    'country': 'CN',
    'dataHistories': [{'dead': '22', 'infected': '1273', 'recovered': '1250', 'sick': '1', 'time': 1584809582622}, {
      'dead': '22',
      'infected': '1273',
      'recovered': '1250',
      'sick': '1',
      'time': 1584810002408
    }],
    'id': 'ff909206-65f8-4131-a3e6-4ee9ba7cdb3a',
    'lastUpdated': '2020-03-21T07:56:01.166Z',
    'latitude': '33.875408',
    'longitude': '113.484016',
    'name': 'Henan',
    'objectid': 'IFuMrMvSjoiX5agYvllh'
  }];

  getMarkers() {
    return this.markers;
  }

  getMarkerById(id) {
    return this.markers.filter((entry) => entry.id === id)[0];
  }

  changeMarkerData() {
    for (let marker of this.markers) {
      // just add a random number at the end
      // marker.description = `Some random value ${Math.random() * 100}`;
    }
  }

}
