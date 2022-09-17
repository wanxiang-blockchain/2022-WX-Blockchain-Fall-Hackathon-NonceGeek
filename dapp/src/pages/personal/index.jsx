import React, { useEffect, useState } from 'react';
import { useSignMessage, useAccount } from 'wagmi';
import RightCard from '@/components/RightCard/index';
import Header from '@/components/Header';
import LeftEdit from '@/components/LeftEdit';
import './index.less';
import RightCardDao from '../../components/RightCardDao/index';
import Button from '@/components/Button';
import { rand_msg } from '@/requests/DataHandler';
import { create_user } from '@/requests/UserManager';
export default function index() {
  const { signMessageAsync } = useSignMessage();

  const { address } = useAccount();
  const [mode, setMode] = useState('ori');
  const [tempData, setTempData] = useState({
    basic_info: {
      avatar: 'test',
      name: 'Robert Fox',
      slogan: 'Have more than 6 years of Digital Product Design experience.',
      social_links: {
        twitter: 'https://twitter.com/Web3dAppCamp',
        'mirror_link ': 'https://mirror.xyz/apecoder.eth',
        'github_link ': 'https://github.com/WeLightProject',
        'wechat ': '197626581',
        'discord ': 'hitchhacker@3691',
      },
      location: 'California',
      skills: [
        'Javascript',
        'C++',
        'Python',
        'HTML',
        'Node',
        'C#',
        'Java',
        'Javascript',
        'C++',
        'Python',
        'HTML',
        'Node',
        'C#',
        'Java',
      ],
    },
    awesome_things: [
      {
        project: 'Design for the transport',
        link: 'www.baidu.com',
      },
      {
        project: 'Probably One of The Most Common',
        link: 'www.baidu.com',
      },
      {
        project: 'LinkedIn Is No Longer LinkedIn Is No',
        link: 'www.baidu.com',
      },
    ],
    project_whitelist: [
      {
        project: 'Ethereum',
        link: 'www.google.com',
      },
      {
        project: 'NonceGeek',
        link: 'www.google.com',
      },
      {
        project: 'Bitcoin',
        link: 'www.google.com',
      },
      {
        project: 'Polygon',
        link: 'www.google.com',
      },
      {
        project: 'FISCOBCOS',
        link: 'www.google.com',
      },
      {
        project: 'Venachain',
        link: 'www.google.com',
      },
    ],
    organization: [
      {
        avatar: 'first',
        name: 'NonceGeek',
        link: '',
        is_core_member: true,
        position: 'founder',
      },
      {
        avatar: 'second',
        name: 'Starcoin',
        link: '',
        is_core_member: true,
        position: 'member',
      },
      {
        avatar: 'third',
        name: 'NonceGeek',
        link: '',
        is_core_member: false,
        position: '',
      },
      {
        avatar: 'first',
        name: 'NonceGeek',
        link: '',
        is_core_member: true,
        position: 'founder',
      },
    ],
  });
  const [tempDataDao, setTempDataDao] = useState({
    basic_info: {
      avatar: 'test',
      name: 'Robert Fox',
      slogan: 'Have more than 6 years of Digital Product Design experience.',
      social_links: {
        twitter: 'https://twitter.com/Web3dAppCamp',
        'mirror_link ': 'https://mirror.xyz/apecoder.eth',
        'github_link ': 'https://github.com/WeLightProject',
        'wechat ': '197626581',
        'discord ': 'hitchhacker@3691',
      },
      location: 'California',
      skills: [
        'Javascript',
        'C++',
        'Python',
        'HTML',
        'Node',
        'C#',
        'Java',
        'Javascript',
        'C++',
        'Python',
        'HTML',
        'Node',
        'C#',
        'Java',
      ],
    },
    awesome_things: [
      {
        project: 'Design for the transport',
        link: 'www.baidu.com',
      },
      {
        project: 'Probably One of The Most Common',
        link: 'www.baidu.com',
      },
      {
        project: 'LinkedIn Is No Longer LinkedIn Is No',
        link: 'www.baidu.com',
      },
    ],
    members: [
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: 'Co-founder',
        is_core_member: true,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: 'Co-founder',
        is_core_member: true,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: 'Co-founder',
        is_core_member: true,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: 'Co-founder',
        is_core_member: true,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: 'Co-founder',
        is_core_member: true,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: 'Co-founder',
        is_core_member: true,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: 'Co-founder',
        is_core_member: true,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: 'Co-founder',
        is_core_member: true,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: '',
        is_core_member: false,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: '',
        is_core_member: false,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: '',
        is_core_member: false,
      },
      {
        avatar: 'member-avatar',
        name: 'Robert Fox',
        position: '',
        is_core_member: false,
      },
    ],
    partners: [
      {
        avatar: 'member-avatar',
        name: 'NonceGeek DAO',
      },
      {
        avatar: 'member-avatar',
        name: 'NonceGeek DAO',
      },
      {
        avatar: 'member-avatar',
        name: 'NonceGeek DAO',
      },
      {
        avatar: 'member-avatar',
        name: 'NonceGeek DAO',
      },
      {
        avatar: 'member-avatar',
        name: 'NonceGeek DAO',
      },
    ],
    core_members: [],
    sub_daos: [],
  });
  const handleUpdate = (val) => {
    setMode(val.mode);
    if (val.mode === 'individual') {
      setTempData(val.data);
    } else {
      setTempDataDao(val.data);
    }
  };
  const saveEdit = async () => {
    if (mode === 'individual') {
      // const res = await get_user({ params: [address] });
      // const isCreated = res.data.result;
      // if (isCreated) {
      // } else {
      //   const res = await rand_msg({ params: [] });
      //   const message = res.data.result;
      //   const signature = await signMessageAsync({ message });
      //   const data = {
      //     params: [tempData, 'user', address, message, signature],
      //   };
      //   console.log(data);
      //   const x = await create_user(JSON.stringify(data));
      //   console.log(x);
      // }
      const res = await rand_msg({ params: [] });
      const message = res.data.result;
      const signature = await signMessageAsync({ message });
      const data = {
        params: [tempData, 'user', address, message, signature],
      };
      const re = await create_user(JSON.stringify(data));
      if (re.data.result.status === 'ok') {
        alert('sussess');
      } else {
        alert(re.data.result.payload);
      }
    } else {
      const res = await rand_msg({ params: [] });
      const message = res.data.result;
      const signature = await signMessageAsync({ message });
      const data = {
        params: [tempDataDao, 'dao', address, message, signature],
      };
      console.log(data);
      const re = await create_user(JSON.stringify(data));
      if (re.data.result.status === 'ok') {
        alert('sussess');
      } else {
        alert(re.data.result.payload);
      }
    }
  };
  return (
    <div className="editor w-full h-screen overflow-hidden flex flex-col bg-black">
      <div className='flex-grow-0 w-full flex justify-center'>
        <Header />
      </div>
      <div className="flex-grow w-main mx-auto overflow-hidden flex">
        <div className="left w-2/3 overflow-y-scroll pt-[14px] text-white">
          <LeftEdit updateForm={handleUpdate}></LeftEdit>
        </div>

        <div className="right w-2/5 overflow-y-scroll">
          {mode === 'individual' ? (
            <RightCard data={tempData} />
          ) : (
            <RightCardDao data={tempDataDao} />
          )}
        </div>
      </div>
      <div className="flex-grow-0 bg-black py-4 flex justify-center items-center">
        <Button
          colorStyle="green"
          buttonText="Save"
          withSpace={false}
          font="IBMPlexMono"
          onClick={saveEdit}
        />
      </div>
    </div>
  );
}
