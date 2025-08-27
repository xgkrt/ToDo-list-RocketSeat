import Text from './components/text';
import TrashIcon from './assets/icons/Trash-Regular.svg?react';
import CheckIcon from './assets/icons/Check-Regular.svg?react';
import ClipBoardIcon from './assets/icons/ClipboardText.svg?react';
import PencilIcon from './assets/icons/PencilSimple-Regular.svg?react';
import PlusIcon from './assets/icons/Plus-Regular.svg?react';
import SpinnerIcon from './assets/icons/spinner.svg?react';
import XIcon from './assets/icons/X-Regular.svg?react';
import Icon from './components/icon';
import Badge from './components/badge';
import Button from './components/button';
import ButtonIcon from './components/button-icon';
import InputText from './components/input-text';
import InputCheckbox from './components/input-checkbox';
import Card from './components/card';
import Container from './components/container';
import Skeleton from './components/skeleton';

export default function App() {

  return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">
            Hello World
          </Text>
          <Text variant="body-md-bold" className="text-pink-base">
            Hello World
          </Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className='fill-green-base' />
          <Icon svg={CheckIcon} className='fill-green-base' />
          <Icon svg={ClipBoardIcon} className='fill-green-base' />
          <Icon svg={PencilIcon} className='fill-green-base' />
          <Icon svg={PlusIcon} className='fill-green-base' />
          <Icon svg={SpinnerIcon} animate className='fill-green-base' />
          <Icon svg={XIcon} className='fill-green-base' />
        </div>

        <div className="flex gap-1">
          <Badge variant="secundary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
        </div>

        <div className='flex gap-1'>
          <ButtonIcon icon={TrashIcon} variant="primary" />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText></InputText>
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
          <Card size={'md'}>Hello world</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>

      </div>
    </Container>
  )
}
